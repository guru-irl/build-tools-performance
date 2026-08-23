import React from 'react';
const LABEL_29884 = 'component_29884';
export function Component29884({ value = 29884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29884, 'data-value': derived.doubled }, children);
}
export default Component29884;
