import React from 'react';
const LABEL_46045 = 'component_46045';
export function Component46045({ value = 46045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46045, 'data-value': derived.doubled }, children);
}
export default Component46045;
