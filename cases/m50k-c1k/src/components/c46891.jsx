import React from 'react';
const LABEL_46891 = 'component_46891';
export function Component46891({ value = 46891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46891, 'data-value': derived.doubled }, children);
}
export default Component46891;
