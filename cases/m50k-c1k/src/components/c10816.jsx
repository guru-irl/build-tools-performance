import React from 'react';
const LABEL_10816 = 'component_10816';
export function Component10816({ value = 10816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10816, 'data-value': derived.doubled }, children);
}
export default Component10816;
