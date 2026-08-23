import React from 'react';
const LABEL_25240 = 'component_25240';
export function Component25240({ value = 25240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25240, 'data-value': derived.doubled }, children);
}
export default Component25240;
