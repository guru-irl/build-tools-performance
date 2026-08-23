import React from 'react';
const LABEL_26205 = 'component_26205';
export function Component26205({ value = 26205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26205, 'data-value': derived.doubled }, children);
}
export default Component26205;
