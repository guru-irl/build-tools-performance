import React from 'react';
const LABEL_5274 = 'component_5274';
export function Component5274({ value = 5274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5274, 'data-value': derived.doubled }, children);
}
export default Component5274;
