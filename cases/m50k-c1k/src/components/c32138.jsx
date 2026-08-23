import React from 'react';
const LABEL_32138 = 'component_32138';
export function Component32138({ value = 32138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32138, 'data-value': derived.doubled }, children);
}
export default Component32138;
