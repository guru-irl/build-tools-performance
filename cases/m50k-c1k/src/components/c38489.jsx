import React from 'react';
const LABEL_38489 = 'component_38489';
export function Component38489({ value = 38489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38489, 'data-value': derived.doubled }, children);
}
export default Component38489;
