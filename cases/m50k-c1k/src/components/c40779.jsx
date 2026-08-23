import React from 'react';
const LABEL_40779 = 'component_40779';
export function Component40779({ value = 40779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40779, 'data-value': derived.doubled }, children);
}
export default Component40779;
