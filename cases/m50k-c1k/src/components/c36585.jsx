import React from 'react';
const LABEL_36585 = 'component_36585';
export function Component36585({ value = 36585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36585, 'data-value': derived.doubled }, children);
}
export default Component36585;
