import React from 'react';
const LABEL_21580 = 'component_21580';
export function Component21580({ value = 21580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21580, 'data-value': derived.doubled }, children);
}
export default Component21580;
