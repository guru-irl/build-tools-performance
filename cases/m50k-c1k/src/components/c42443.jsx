import React from 'react';
const LABEL_42443 = 'component_42443';
export function Component42443({ value = 42443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42443, 'data-value': derived.doubled }, children);
}
export default Component42443;
