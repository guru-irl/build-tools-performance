import React from 'react';
const LABEL_44989 = 'component_44989';
export function Component44989({ value = 44989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44989, 'data-value': derived.doubled }, children);
}
export default Component44989;
