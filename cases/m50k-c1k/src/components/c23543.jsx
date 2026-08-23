import React from 'react';
const LABEL_23543 = 'component_23543';
export function Component23543({ value = 23543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23543, 'data-value': derived.doubled }, children);
}
export default Component23543;
