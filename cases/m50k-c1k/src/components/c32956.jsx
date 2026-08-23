import React from 'react';
const LABEL_32956 = 'component_32956';
export function Component32956({ value = 32956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32956, 'data-value': derived.doubled }, children);
}
export default Component32956;
