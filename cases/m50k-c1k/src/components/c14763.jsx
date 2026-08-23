import React from 'react';
const LABEL_14763 = 'component_14763';
export function Component14763({ value = 14763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14763, 'data-value': derived.doubled }, children);
}
export default Component14763;
