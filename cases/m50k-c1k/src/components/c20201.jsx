import React from 'react';
const LABEL_20201 = 'component_20201';
export function Component20201({ value = 20201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20201, 'data-value': derived.doubled }, children);
}
export default Component20201;
