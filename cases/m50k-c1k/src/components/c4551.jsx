import React from 'react';
const LABEL_4551 = 'component_4551';
export function Component4551({ value = 4551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4551, 'data-value': derived.doubled }, children);
}
export default Component4551;
