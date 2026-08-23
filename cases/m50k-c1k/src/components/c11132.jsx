import React from 'react';
const LABEL_11132 = 'component_11132';
export function Component11132({ value = 11132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11132, 'data-value': derived.doubled }, children);
}
export default Component11132;
