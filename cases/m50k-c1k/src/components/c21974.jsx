import React from 'react';
const LABEL_21974 = 'component_21974';
export function Component21974({ value = 21974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21974, 'data-value': derived.doubled }, children);
}
export default Component21974;
