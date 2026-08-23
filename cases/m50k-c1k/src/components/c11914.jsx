import React from 'react';
const LABEL_11914 = 'component_11914';
export function Component11914({ value = 11914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11914, 'data-value': derived.doubled }, children);
}
export default Component11914;
