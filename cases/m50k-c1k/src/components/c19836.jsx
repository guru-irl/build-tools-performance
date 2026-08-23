import React from 'react';
const LABEL_19836 = 'component_19836';
export function Component19836({ value = 19836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19836, 'data-value': derived.doubled }, children);
}
export default Component19836;
