import React from 'react';
const LABEL_45270 = 'component_45270';
export function Component45270({ value = 45270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45270, 'data-value': derived.doubled }, children);
}
export default Component45270;
