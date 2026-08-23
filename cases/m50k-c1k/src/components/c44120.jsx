import React from 'react';
const LABEL_44120 = 'component_44120';
export function Component44120({ value = 44120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44120, 'data-value': derived.doubled }, children);
}
export default Component44120;
