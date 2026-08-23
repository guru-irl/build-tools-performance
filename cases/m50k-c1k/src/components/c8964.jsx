import React from 'react';
const LABEL_8964 = 'component_8964';
export function Component8964({ value = 8964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8964, 'data-value': derived.doubled }, children);
}
export default Component8964;
