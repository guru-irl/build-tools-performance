import React from 'react';
const LABEL_35086 = 'component_35086';
export function Component35086({ value = 35086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35086, 'data-value': derived.doubled }, children);
}
export default Component35086;
