import React from 'react';
const LABEL_14017 = 'component_14017';
export function Component14017({ value = 14017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14017, 'data-value': derived.doubled }, children);
}
export default Component14017;
