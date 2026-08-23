import React from 'react';
const LABEL_4630 = 'component_4630';
export function Component4630({ value = 4630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4630, 'data-value': derived.doubled }, children);
}
export default Component4630;
