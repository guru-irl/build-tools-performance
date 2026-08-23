import React from 'react';
const LABEL_29907 = 'component_29907';
export function Component29907({ value = 29907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29907, 'data-value': derived.doubled }, children);
}
export default Component29907;
