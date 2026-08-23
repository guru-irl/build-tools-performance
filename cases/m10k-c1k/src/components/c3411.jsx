import React from 'react';
const LABEL_3411 = 'component_3411';
export function Component3411({ value = 3411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3411, 'data-value': derived.doubled }, children);
}
export default Component3411;
