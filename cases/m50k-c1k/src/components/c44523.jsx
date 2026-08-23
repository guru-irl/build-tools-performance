import React from 'react';
const LABEL_44523 = 'component_44523';
export function Component44523({ value = 44523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44523, 'data-value': derived.doubled }, children);
}
export default Component44523;
