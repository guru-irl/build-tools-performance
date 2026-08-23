import React from 'react';
const LABEL_38033 = 'component_38033';
export function Component38033({ value = 38033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38033, 'data-value': derived.doubled }, children);
}
export default Component38033;
