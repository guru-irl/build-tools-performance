import React from 'react';
const LABEL_43059 = 'component_43059';
export function Component43059({ value = 43059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43059, 'data-value': derived.doubled }, children);
}
export default Component43059;
