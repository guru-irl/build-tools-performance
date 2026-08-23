import React from 'react';
const LABEL_31710 = 'component_31710';
export function Component31710({ value = 31710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31710, 'data-value': derived.doubled }, children);
}
export default Component31710;
