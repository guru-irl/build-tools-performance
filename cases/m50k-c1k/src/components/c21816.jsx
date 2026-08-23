import React from 'react';
const LABEL_21816 = 'component_21816';
export function Component21816({ value = 21816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21816, 'data-value': derived.doubled }, children);
}
export default Component21816;
