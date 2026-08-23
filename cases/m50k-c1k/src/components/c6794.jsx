import React from 'react';
const LABEL_6794 = 'component_6794';
export function Component6794({ value = 6794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6794, 'data-value': derived.doubled }, children);
}
export default Component6794;
