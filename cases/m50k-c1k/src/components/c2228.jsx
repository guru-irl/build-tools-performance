import React from 'react';
const LABEL_2228 = 'component_2228';
export function Component2228({ value = 2228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2228, 'data-value': derived.doubled }, children);
}
export default Component2228;
