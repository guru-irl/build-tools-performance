import React from 'react';
const LABEL_20849 = 'component_20849';
export function Component20849({ value = 20849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20849, 'data-value': derived.doubled }, children);
}
export default Component20849;
