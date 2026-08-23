import React from 'react';
const LABEL_6045 = 'component_6045';
export function Component6045({ value = 6045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6045, 'data-value': derived.doubled }, children);
}
export default Component6045;
