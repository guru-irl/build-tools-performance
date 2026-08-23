import React from 'react';
const LABEL_38964 = 'component_38964';
export function Component38964({ value = 38964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38964, 'data-value': derived.doubled }, children);
}
export default Component38964;
