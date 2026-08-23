import React from 'react';
const LABEL_46585 = 'component_46585';
export function Component46585({ value = 46585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46585, 'data-value': derived.doubled }, children);
}
export default Component46585;
