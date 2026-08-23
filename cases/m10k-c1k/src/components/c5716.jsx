import React from 'react';
const LABEL_5716 = 'component_5716';
export function Component5716({ value = 5716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5716, 'data-value': derived.doubled }, children);
}
export default Component5716;
