import React from 'react';
const LABEL_5345 = 'component_5345';
export function Component5345({ value = 5345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5345, 'data-value': derived.doubled }, children);
}
export default Component5345;
