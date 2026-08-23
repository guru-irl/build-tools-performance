import React from 'react';
const LABEL_26017 = 'component_26017';
export function Component26017({ value = 26017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26017, 'data-value': derived.doubled }, children);
}
export default Component26017;
