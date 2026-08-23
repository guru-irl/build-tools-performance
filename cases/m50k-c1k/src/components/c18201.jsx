import React from 'react';
const LABEL_18201 = 'component_18201';
export function Component18201({ value = 18201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18201, 'data-value': derived.doubled }, children);
}
export default Component18201;
