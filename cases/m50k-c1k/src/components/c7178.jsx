import React from 'react';
const LABEL_7178 = 'component_7178';
export function Component7178({ value = 7178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7178, 'data-value': derived.doubled }, children);
}
export default Component7178;
