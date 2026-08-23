import React from 'react';
const LABEL_19027 = 'component_19027';
export function Component19027({ value = 19027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19027, 'data-value': derived.doubled }, children);
}
export default Component19027;
