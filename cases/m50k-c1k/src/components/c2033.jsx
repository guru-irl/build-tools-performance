import React from 'react';
const LABEL_2033 = 'component_2033';
export function Component2033({ value = 2033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2033, 'data-value': derived.doubled }, children);
}
export default Component2033;
