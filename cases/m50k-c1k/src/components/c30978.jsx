import React from 'react';
const LABEL_30978 = 'component_30978';
export function Component30978({ value = 30978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30978, 'data-value': derived.doubled }, children);
}
export default Component30978;
