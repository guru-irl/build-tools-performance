import React from 'react';
const LABEL_44978 = 'component_44978';
export function Component44978({ value = 44978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44978, 'data-value': derived.doubled }, children);
}
export default Component44978;
