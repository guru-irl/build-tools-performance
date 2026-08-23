import React from 'react';
const LABEL_20383 = 'component_20383';
export function Component20383({ value = 20383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20383, 'data-value': derived.doubled }, children);
}
export default Component20383;
