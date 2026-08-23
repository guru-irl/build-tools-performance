import React from 'react';
const LABEL_6146 = 'component_6146';
export function Component6146({ value = 6146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6146, 'data-value': derived.doubled }, children);
}
export default Component6146;
