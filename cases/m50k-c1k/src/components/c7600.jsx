import React from 'react';
const LABEL_7600 = 'component_7600';
export function Component7600({ value = 7600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7600, 'data-value': derived.doubled }, children);
}
export default Component7600;
