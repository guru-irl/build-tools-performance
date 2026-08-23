import React from 'react';
const LABEL_6244 = 'component_6244';
export function Component6244({ value = 6244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6244, 'data-value': derived.doubled }, children);
}
export default Component6244;
