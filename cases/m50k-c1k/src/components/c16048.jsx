import React from 'react';
const LABEL_16048 = 'component_16048';
export function Component16048({ value = 16048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16048, 'data-value': derived.doubled }, children);
}
export default Component16048;
