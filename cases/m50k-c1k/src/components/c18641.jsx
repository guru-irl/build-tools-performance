import React from 'react';
const LABEL_18641 = 'component_18641';
export function Component18641({ value = 18641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18641, 'data-value': derived.doubled }, children);
}
export default Component18641;
