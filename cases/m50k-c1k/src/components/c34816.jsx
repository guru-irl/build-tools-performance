import React from 'react';
const LABEL_34816 = 'component_34816';
export function Component34816({ value = 34816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34816, 'data-value': derived.doubled }, children);
}
export default Component34816;
