import React from 'react';
const LABEL_8510 = 'component_8510';
export function Component8510({ value = 8510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8510, 'data-value': derived.doubled }, children);
}
export default Component8510;
