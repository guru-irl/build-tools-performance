import React from 'react';
const LABEL_23580 = 'component_23580';
export function Component23580({ value = 23580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23580, 'data-value': derived.doubled }, children);
}
export default Component23580;
