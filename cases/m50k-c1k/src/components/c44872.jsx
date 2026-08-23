import React from 'react';
const LABEL_44872 = 'component_44872';
export function Component44872({ value = 44872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44872, 'data-value': derived.doubled }, children);
}
export default Component44872;
