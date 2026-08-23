import React from 'react';
const LABEL_14063 = 'component_14063';
export function Component14063({ value = 14063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14063, 'data-value': derived.doubled }, children);
}
export default Component14063;
