import React from 'react';
const LABEL_2424 = 'component_2424';
export function Component2424({ value = 2424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2424, 'data-value': derived.doubled }, children);
}
export default Component2424;
