import React from 'react';
const LABEL_19488 = 'component_19488';
export function Component19488({ value = 19488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19488, 'data-value': derived.doubled }, children);
}
export default Component19488;
