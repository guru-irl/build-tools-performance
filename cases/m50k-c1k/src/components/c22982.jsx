import React from 'react';
const LABEL_22982 = 'component_22982';
export function Component22982({ value = 22982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22982, 'data-value': derived.doubled }, children);
}
export default Component22982;
