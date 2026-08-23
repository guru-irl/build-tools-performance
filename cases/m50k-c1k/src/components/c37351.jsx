import React from 'react';
const LABEL_37351 = 'component_37351';
export function Component37351({ value = 37351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37351, 'data-value': derived.doubled }, children);
}
export default Component37351;
