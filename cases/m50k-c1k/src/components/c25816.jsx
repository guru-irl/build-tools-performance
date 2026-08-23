import React from 'react';
const LABEL_25816 = 'component_25816';
export function Component25816({ value = 25816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25816, 'data-value': derived.doubled }, children);
}
export default Component25816;
