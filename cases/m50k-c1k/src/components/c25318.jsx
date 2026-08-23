import React from 'react';
const LABEL_25318 = 'component_25318';
export function Component25318({ value = 25318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25318, 'data-value': derived.doubled }, children);
}
export default Component25318;
