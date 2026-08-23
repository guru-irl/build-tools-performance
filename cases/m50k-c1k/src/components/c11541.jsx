import React from 'react';
const LABEL_11541 = 'component_11541';
export function Component11541({ value = 11541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11541, 'data-value': derived.doubled }, children);
}
export default Component11541;
