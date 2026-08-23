import React from 'react';
const LABEL_42905 = 'component_42905';
export function Component42905({ value = 42905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42905, 'data-value': derived.doubled }, children);
}
export default Component42905;
