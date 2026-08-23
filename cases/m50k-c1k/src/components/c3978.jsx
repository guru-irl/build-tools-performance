import React from 'react';
const LABEL_3978 = 'component_3978';
export function Component3978({ value = 3978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3978, 'data-value': derived.doubled }, children);
}
export default Component3978;
