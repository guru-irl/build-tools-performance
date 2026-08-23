import React from 'react';
const LABEL_29945 = 'component_29945';
export function Component29945({ value = 29945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29945, 'data-value': derived.doubled }, children);
}
export default Component29945;
