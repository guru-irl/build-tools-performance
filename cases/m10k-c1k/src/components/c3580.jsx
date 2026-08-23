import React from 'react';
const LABEL_3580 = 'component_3580';
export function Component3580({ value = 3580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3580, 'data-value': derived.doubled }, children);
}
export default Component3580;
