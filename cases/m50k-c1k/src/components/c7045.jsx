import React from 'react';
const LABEL_7045 = 'component_7045';
export function Component7045({ value = 7045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7045, 'data-value': derived.doubled }, children);
}
export default Component7045;
