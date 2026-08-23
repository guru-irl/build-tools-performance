import React from 'react';
const LABEL_23205 = 'component_23205';
export function Component23205({ value = 23205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23205, 'data-value': derived.doubled }, children);
}
export default Component23205;
