import React from 'react';
const LABEL_4671 = 'component_4671';
export function Component4671({ value = 4671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4671, 'data-value': derived.doubled }, children);
}
export default Component4671;
