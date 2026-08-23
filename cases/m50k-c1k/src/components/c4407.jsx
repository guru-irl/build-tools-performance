import React from 'react';
const LABEL_4407 = 'component_4407';
export function Component4407({ value = 4407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4407, 'data-value': derived.doubled }, children);
}
export default Component4407;
