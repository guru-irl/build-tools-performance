import React from 'react';
const LABEL_4517 = 'component_4517';
export function Component4517({ value = 4517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4517, 'data-value': derived.doubled }, children);
}
export default Component4517;
