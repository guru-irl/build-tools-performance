import React from 'react';
const LABEL_20916 = 'component_20916';
export function Component20916({ value = 20916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20916, 'data-value': derived.doubled }, children);
}
export default Component20916;
