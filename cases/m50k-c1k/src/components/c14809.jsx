import React from 'react';
const LABEL_14809 = 'component_14809';
export function Component14809({ value = 14809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14809, 'data-value': derived.doubled }, children);
}
export default Component14809;
