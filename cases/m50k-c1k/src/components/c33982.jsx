import React from 'react';
const LABEL_33982 = 'component_33982';
export function Component33982({ value = 33982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33982, 'data-value': derived.doubled }, children);
}
export default Component33982;
