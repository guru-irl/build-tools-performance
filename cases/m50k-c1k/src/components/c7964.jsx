import React from 'react';
const LABEL_7964 = 'component_7964';
export function Component7964({ value = 7964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7964, 'data-value': derived.doubled }, children);
}
export default Component7964;
