import React from 'react';
const LABEL_14429 = 'component_14429';
export function Component14429({ value = 14429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14429, 'data-value': derived.doubled }, children);
}
export default Component14429;
