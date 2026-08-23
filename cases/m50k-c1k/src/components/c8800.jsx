import React from 'react';
const LABEL_8800 = 'component_8800';
export function Component8800({ value = 8800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8800, 'data-value': derived.doubled }, children);
}
export default Component8800;
