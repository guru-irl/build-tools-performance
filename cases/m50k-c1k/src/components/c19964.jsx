import React from 'react';
const LABEL_19964 = 'component_19964';
export function Component19964({ value = 19964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19964, 'data-value': derived.doubled }, children);
}
export default Component19964;
