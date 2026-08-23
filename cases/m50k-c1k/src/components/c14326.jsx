import React from 'react';
const LABEL_14326 = 'component_14326';
export function Component14326({ value = 14326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14326, 'data-value': derived.doubled }, children);
}
export default Component14326;
