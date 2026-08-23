import React from 'react';
const LABEL_4505 = 'component_4505';
export function Component4505({ value = 4505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4505, 'data-value': derived.doubled }, children);
}
export default Component4505;
