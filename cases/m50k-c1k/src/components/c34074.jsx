import React from 'react';
const LABEL_34074 = 'component_34074';
export function Component34074({ value = 34074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34074, 'data-value': derived.doubled }, children);
}
export default Component34074;
