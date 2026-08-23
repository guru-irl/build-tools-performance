import React from 'react';
const LABEL_20068 = 'component_20068';
export function Component20068({ value = 20068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20068, 'data-value': derived.doubled }, children);
}
export default Component20068;
