import React from 'react';
const LABEL_8559 = 'component_8559';
export function Component8559({ value = 8559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8559, 'data-value': derived.doubled }, children);
}
export default Component8559;
