import React from 'react';
const LABEL_5244 = 'component_5244';
export function Component5244({ value = 5244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5244, 'data-value': derived.doubled }, children);
}
export default Component5244;
