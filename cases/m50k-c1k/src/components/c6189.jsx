import React from 'react';
const LABEL_6189 = 'component_6189';
export function Component6189({ value = 6189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6189, 'data-value': derived.doubled }, children);
}
export default Component6189;
