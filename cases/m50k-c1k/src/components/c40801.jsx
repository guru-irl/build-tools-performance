import React from 'react';
const LABEL_40801 = 'component_40801';
export function Component40801({ value = 40801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40801, 'data-value': derived.doubled }, children);
}
export default Component40801;
