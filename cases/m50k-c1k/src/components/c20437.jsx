import React from 'react';
const LABEL_20437 = 'component_20437';
export function Component20437({ value = 20437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20437, 'data-value': derived.doubled }, children);
}
export default Component20437;
