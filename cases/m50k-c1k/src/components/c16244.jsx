import React from 'react';
const LABEL_16244 = 'component_16244';
export function Component16244({ value = 16244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16244, 'data-value': derived.doubled }, children);
}
export default Component16244;
