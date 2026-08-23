import React from 'react';
const LABEL_33422 = 'component_33422';
export function Component33422({ value = 33422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33422, 'data-value': derived.doubled }, children);
}
export default Component33422;
