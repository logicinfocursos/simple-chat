import {
    Star, MapPin, Phone, Instagram, Facebook, MessageCircle, Pinterest, Youtube, Linkedin, TikTok,
    Calendar, Clock, User, ArrowLeft, ChevronLeft, ChevronRight,
    Play, Heart
} from 'lucide-react';

export const renderStarsUtil = (rating, darkMode=false,) => {
    return Array.from({ length: 5 }, (_, i) => (
        <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : darkMode ? 'text-gray-600' : 'text-gray-300'
                }`}
        />
    ));
};