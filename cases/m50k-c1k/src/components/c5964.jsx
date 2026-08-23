import React from 'react';
const LABEL_5964 = 'component_5964';
export function Component5964({ value = 5964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5964, 'data-value': derived.doubled }, children);
}
export default Component5964;
