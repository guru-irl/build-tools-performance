import React from 'react';
const LABEL_5383 = 'component_5383';
export function Component5383({ value = 5383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5383, 'data-value': derived.doubled }, children);
}
export default Component5383;
