import React from 'react';
const LABEL_6964 = 'component_6964';
export function Component6964({ value = 6964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6964, 'data-value': derived.doubled }, children);
}
export default Component6964;
