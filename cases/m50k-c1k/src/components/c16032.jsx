import React from 'react';
const LABEL_16032 = 'component_16032';
export function Component16032({ value = 16032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16032, 'data-value': derived.doubled }, children);
}
export default Component16032;
