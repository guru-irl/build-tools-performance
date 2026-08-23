import React from 'react';
const LABEL_31609 = 'component_31609';
export function Component31609({ value = 31609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31609, 'data-value': derived.doubled }, children);
}
export default Component31609;
