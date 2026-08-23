import React from 'react';
const LABEL_7129 = 'component_7129';
export function Component7129({ value = 7129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7129, 'data-value': derived.doubled }, children);
}
export default Component7129;
