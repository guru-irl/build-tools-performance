import React from 'react';
const LABEL_42724 = 'component_42724';
export function Component42724({ value = 42724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42724, 'data-value': derived.doubled }, children);
}
export default Component42724;
