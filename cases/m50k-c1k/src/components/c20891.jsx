import React from 'react';
const LABEL_20891 = 'component_20891';
export function Component20891({ value = 20891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20891, 'data-value': derived.doubled }, children);
}
export default Component20891;
