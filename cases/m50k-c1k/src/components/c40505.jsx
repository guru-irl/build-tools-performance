import React from 'react';
const LABEL_40505 = 'component_40505';
export function Component40505({ value = 40505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40505, 'data-value': derived.doubled }, children);
}
export default Component40505;
