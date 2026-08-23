import React from 'react';
const LABEL_2710 = 'component_2710';
export function Component2710({ value = 2710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2710, 'data-value': derived.doubled }, children);
}
export default Component2710;
