import React from 'react';
const LABEL_24907 = 'component_24907';
export function Component24907({ value = 24907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24907, 'data-value': derived.doubled }, children);
}
export default Component24907;
