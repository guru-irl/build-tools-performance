import React from 'react';
const LABEL_22270 = 'component_22270';
export function Component22270({ value = 22270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22270, 'data-value': derived.doubled }, children);
}
export default Component22270;
