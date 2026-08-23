import React from 'react';
const LABEL_44250 = 'component_44250';
export function Component44250({ value = 44250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44250, 'data-value': derived.doubled }, children);
}
export default Component44250;
