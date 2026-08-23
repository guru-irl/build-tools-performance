import React from 'react';
const LABEL_11880 = 'component_11880';
export function Component11880({ value = 11880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11880, 'data-value': derived.doubled }, children);
}
export default Component11880;
