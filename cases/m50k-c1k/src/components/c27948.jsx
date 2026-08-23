import React from 'react';
const LABEL_27948 = 'component_27948';
export function Component27948({ value = 27948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27948, 'data-value': derived.doubled }, children);
}
export default Component27948;
