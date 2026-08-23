import React from 'react';
const LABEL_44486 = 'component_44486';
export function Component44486({ value = 44486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44486, 'data-value': derived.doubled }, children);
}
export default Component44486;
