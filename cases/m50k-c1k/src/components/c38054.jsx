import React from 'react';
const LABEL_38054 = 'component_38054';
export function Component38054({ value = 38054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38054, 'data-value': derived.doubled }, children);
}
export default Component38054;
