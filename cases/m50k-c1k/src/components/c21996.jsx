import React from 'react';
const LABEL_21996 = 'component_21996';
export function Component21996({ value = 21996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21996, 'data-value': derived.doubled }, children);
}
export default Component21996;
