import React from 'react';
const LABEL_44152 = 'component_44152';
export function Component44152({ value = 44152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44152, 'data-value': derived.doubled }, children);
}
export default Component44152;
