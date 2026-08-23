import React from 'react';
const LABEL_19374 = 'component_19374';
export function Component19374({ value = 19374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19374, 'data-value': derived.doubled }, children);
}
export default Component19374;
