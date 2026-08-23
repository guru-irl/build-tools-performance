import React from 'react';
const LABEL_27270 = 'component_27270';
export function Component27270({ value = 27270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27270, 'data-value': derived.doubled }, children);
}
export default Component27270;
