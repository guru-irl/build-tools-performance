import React from 'react';
const LABEL_7696 = 'component_7696';
export function Component7696({ value = 7696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7696, 'data-value': derived.doubled }, children);
}
export default Component7696;
