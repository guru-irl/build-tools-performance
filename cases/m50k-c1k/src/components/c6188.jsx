import React from 'react';
const LABEL_6188 = 'component_6188';
export function Component6188({ value = 6188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6188, 'data-value': derived.doubled }, children);
}
export default Component6188;
