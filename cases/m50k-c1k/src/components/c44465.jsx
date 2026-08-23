import React from 'react';
const LABEL_44465 = 'component_44465';
export function Component44465({ value = 44465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44465, 'data-value': derived.doubled }, children);
}
export default Component44465;
