import React from 'react';
const LABEL_13045 = 'component_13045';
export function Component13045({ value = 13045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13045, 'data-value': derived.doubled }, children);
}
export default Component13045;
