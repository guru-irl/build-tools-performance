import React from 'react';
const LABEL_40201 = 'component_40201';
export function Component40201({ value = 40201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40201, 'data-value': derived.doubled }, children);
}
export default Component40201;
