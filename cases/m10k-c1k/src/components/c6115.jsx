import React from 'react';
const LABEL_6115 = 'component_6115';
export function Component6115({ value = 6115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6115, 'data-value': derived.doubled }, children);
}
export default Component6115;
