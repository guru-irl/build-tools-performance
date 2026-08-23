import React from 'react';
const LABEL_35218 = 'component_35218';
export function Component35218({ value = 35218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35218, 'data-value': derived.doubled }, children);
}
export default Component35218;
