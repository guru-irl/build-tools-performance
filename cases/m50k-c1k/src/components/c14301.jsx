import React from 'react';
const LABEL_14301 = 'component_14301';
export function Component14301({ value = 14301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14301, 'data-value': derived.doubled }, children);
}
export default Component14301;
