import React from 'react';
const LABEL_4541 = 'component_4541';
export function Component4541({ value = 4541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4541, 'data-value': derived.doubled }, children);
}
export default Component4541;
