import React from 'react';
const LABEL_8270 = 'component_8270';
export function Component8270({ value = 8270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8270, 'data-value': derived.doubled }, children);
}
export default Component8270;
