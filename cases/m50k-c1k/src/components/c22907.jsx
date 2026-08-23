import React from 'react';
const LABEL_22907 = 'component_22907';
export function Component22907({ value = 22907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22907, 'data-value': derived.doubled }, children);
}
export default Component22907;
