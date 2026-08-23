import React from 'react';
const LABEL_42515 = 'component_42515';
export function Component42515({ value = 42515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42515, 'data-value': derived.doubled }, children);
}
export default Component42515;
