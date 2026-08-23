import React from 'react';
const LABEL_5443 = 'component_5443';
export function Component5443({ value = 5443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5443, 'data-value': derived.doubled }, children);
}
export default Component5443;
