import React from 'react';
const LABEL_6918 = 'component_6918';
export function Component6918({ value = 6918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6918, 'data-value': derived.doubled }, children);
}
export default Component6918;
