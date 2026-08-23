import React from 'react';
const LABEL_41255 = 'component_41255';
export function Component41255({ value = 41255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41255, 'data-value': derived.doubled }, children);
}
export default Component41255;
