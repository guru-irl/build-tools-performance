import React from 'react';
const LABEL_11115 = 'component_11115';
export function Component11115({ value = 11115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11115, 'data-value': derived.doubled }, children);
}
export default Component11115;
