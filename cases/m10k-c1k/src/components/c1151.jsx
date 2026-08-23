import React from 'react';
const LABEL_1151 = 'component_1151';
export function Component1151({ value = 1151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1151, 'data-value': derived.doubled }, children);
}
export default Component1151;
