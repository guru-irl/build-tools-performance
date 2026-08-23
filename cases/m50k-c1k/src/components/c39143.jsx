import React from 'react';
const LABEL_39143 = 'component_39143';
export function Component39143({ value = 39143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39143, 'data-value': derived.doubled }, children);
}
export default Component39143;
