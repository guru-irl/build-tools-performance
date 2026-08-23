import React from 'react';
const LABEL_33930 = 'component_33930';
export function Component33930({ value = 33930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33930, 'data-value': derived.doubled }, children);
}
export default Component33930;
