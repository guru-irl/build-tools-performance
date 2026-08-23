import React from 'react';
const LABEL_2937 = 'component_2937';
export function Component2937({ value = 2937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2937, 'data-value': derived.doubled }, children);
}
export default Component2937;
