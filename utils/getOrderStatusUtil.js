export const getOrderStatusUtil = (status) => {
    switch (status) {
      case 'processing':
        return 'pedido em análise'
  
      case 'purchaseApproved':
        return 'compra aprovada'
  
      case 'purchaseFailed':
        return 'falha na compra'
  
      case 'cancelled':
        return 'cancelado'
  
      case 'delivered':
        return 'entregue'
  
      case 'inProgress':
        return 'em elaboração'
  
      case 'withCourier':
        return 'com entregador'
  
      case 'returned':
        return 'devolvido ao entregador'
  
      case 'deliveryFailed':
        return 'falha na entrega'
  
      default:
        return 'desconhecido'
    }
  }