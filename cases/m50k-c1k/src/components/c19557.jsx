import React from 'react';
const LABEL_19557 = 'component_19557';
export function Component19557({ value = 19557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19557, 'data-value': derived.doubled }, children);
}
export default Component19557;
