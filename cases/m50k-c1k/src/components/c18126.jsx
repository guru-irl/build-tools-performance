import React from 'react';
const LABEL_18126 = 'component_18126';
export function Component18126({ value = 18126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18126, 'data-value': derived.doubled }, children);
}
export default Component18126;
