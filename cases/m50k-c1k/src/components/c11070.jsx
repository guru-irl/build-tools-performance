import React from 'react';
const LABEL_11070 = 'component_11070';
export function Component11070({ value = 11070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11070, 'data-value': derived.doubled }, children);
}
export default Component11070;
