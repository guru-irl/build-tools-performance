import React from 'react';
const LABEL_44655 = 'component_44655';
export function Component44655({ value = 44655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44655, 'data-value': derived.doubled }, children);
}
export default Component44655;
