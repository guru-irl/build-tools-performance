import React from 'react';
const LABEL_18363 = 'component_18363';
export function Component18363({ value = 18363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18363, 'data-value': derived.doubled }, children);
}
export default Component18363;
