import React from 'react';
const LABEL_44648 = 'component_44648';
export function Component44648({ value = 44648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44648, 'data-value': derived.doubled }, children);
}
export default Component44648;
