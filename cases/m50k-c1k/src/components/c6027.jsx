import React from 'react';
const LABEL_6027 = 'component_6027';
export function Component6027({ value = 6027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6027, 'data-value': derived.doubled }, children);
}
export default Component6027;
