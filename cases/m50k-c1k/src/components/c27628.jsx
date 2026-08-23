import React from 'react';
const LABEL_27628 = 'component_27628';
export function Component27628({ value = 27628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27628, 'data-value': derived.doubled }, children);
}
export default Component27628;
