import React from 'react';
const LABEL_5033 = 'component_5033';
export function Component5033({ value = 5033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5033, 'data-value': derived.doubled }, children);
}
export default Component5033;
