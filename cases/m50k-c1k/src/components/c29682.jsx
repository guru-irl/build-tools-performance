import React from 'react';
const LABEL_29682 = 'component_29682';
export function Component29682({ value = 29682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29682, 'data-value': derived.doubled }, children);
}
export default Component29682;
