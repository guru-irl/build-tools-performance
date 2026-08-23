import React from 'react';
const LABEL_13232 = 'component_13232';
export function Component13232({ value = 13232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13232, 'data-value': derived.doubled }, children);
}
export default Component13232;
