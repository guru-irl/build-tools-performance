import React from 'react';
const LABEL_19280 = 'component_19280';
export function Component19280({ value = 19280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19280, 'data-value': derived.doubled }, children);
}
export default Component19280;
