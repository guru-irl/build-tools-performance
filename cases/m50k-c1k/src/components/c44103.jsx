import React from 'react';
const LABEL_44103 = 'component_44103';
export function Component44103({ value = 44103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44103, 'data-value': derived.doubled }, children);
}
export default Component44103;
