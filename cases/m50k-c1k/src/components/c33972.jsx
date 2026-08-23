import React from 'react';
const LABEL_33972 = 'component_33972';
export function Component33972({ value = 33972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33972, 'data-value': derived.doubled }, children);
}
export default Component33972;
