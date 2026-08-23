import React from 'react';
const LABEL_19552 = 'component_19552';
export function Component19552({ value = 19552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19552, 'data-value': derived.doubled }, children);
}
export default Component19552;
