import React from 'react';
const LABEL_31990 = 'component_31990';
export function Component31990({ value = 31990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31990, 'data-value': derived.doubled }, children);
}
export default Component31990;
