import React from 'react';
const LABEL_16424 = 'component_16424';
export function Component16424({ value = 16424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16424, 'data-value': derived.doubled }, children);
}
export default Component16424;
