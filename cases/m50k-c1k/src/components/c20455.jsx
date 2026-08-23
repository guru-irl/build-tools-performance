import React from 'react';
const LABEL_20455 = 'component_20455';
export function Component20455({ value = 20455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20455, 'data-value': derived.doubled }, children);
}
export default Component20455;
