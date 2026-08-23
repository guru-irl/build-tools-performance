import React from 'react';
const LABEL_24559 = 'component_24559';
export function Component24559({ value = 24559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24559, 'data-value': derived.doubled }, children);
}
export default Component24559;
