import React from 'react';
const LABEL_24437 = 'component_24437';
export function Component24437({ value = 24437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24437, 'data-value': derived.doubled }, children);
}
export default Component24437;
