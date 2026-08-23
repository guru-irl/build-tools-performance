import React from 'react';
const LABEL_30255 = 'component_30255';
export function Component30255({ value = 30255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30255, 'data-value': derived.doubled }, children);
}
export default Component30255;
