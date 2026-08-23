import React from 'react';
const LABEL_4611 = 'component_4611';
export function Component4611({ value = 4611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4611, 'data-value': derived.doubled }, children);
}
export default Component4611;
