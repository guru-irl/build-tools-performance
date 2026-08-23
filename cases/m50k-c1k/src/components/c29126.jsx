import React from 'react';
const LABEL_29126 = 'component_29126';
export function Component29126({ value = 29126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29126, 'data-value': derived.doubled }, children);
}
export default Component29126;
