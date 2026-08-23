import React from 'react';
const LABEL_41836 = 'component_41836';
export function Component41836({ value = 41836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41836, 'data-value': derived.doubled }, children);
}
export default Component41836;
