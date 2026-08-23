import React from 'react';
const LABEL_19978 = 'component_19978';
export function Component19978({ value = 19978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19978, 'data-value': derived.doubled }, children);
}
export default Component19978;
