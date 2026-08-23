import React from 'react';
const LABEL_15027 = 'component_15027';
export function Component15027({ value = 15027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15027, 'data-value': derived.doubled }, children);
}
export default Component15027;
