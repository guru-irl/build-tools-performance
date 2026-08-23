import React from 'react';
const LABEL_33300 = 'component_33300';
export function Component33300({ value = 33300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33300, 'data-value': derived.doubled }, children);
}
export default Component33300;
