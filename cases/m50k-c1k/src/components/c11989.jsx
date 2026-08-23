import React from 'react';
const LABEL_11989 = 'component_11989';
export function Component11989({ value = 11989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11989, 'data-value': derived.doubled }, children);
}
export default Component11989;
