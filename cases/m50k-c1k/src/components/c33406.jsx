import React from 'react';
const LABEL_33406 = 'component_33406';
export function Component33406({ value = 33406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33406, 'data-value': derived.doubled }, children);
}
export default Component33406;
