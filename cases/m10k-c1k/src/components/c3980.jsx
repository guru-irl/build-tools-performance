import React from 'react';
const LABEL_3980 = 'component_3980';
export function Component3980({ value = 3980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3980, 'data-value': derived.doubled }, children);
}
export default Component3980;
