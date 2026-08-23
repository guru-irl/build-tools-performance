import React from 'react';
const LABEL_4124 = 'component_4124';
export function Component4124({ value = 4124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4124, 'data-value': derived.doubled }, children);
}
export default Component4124;
