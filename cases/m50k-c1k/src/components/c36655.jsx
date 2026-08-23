import React from 'react';
const LABEL_36655 = 'component_36655';
export function Component36655({ value = 36655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36655, 'data-value': derived.doubled }, children);
}
export default Component36655;
