import React from 'react';
const LABEL_29897 = 'component_29897';
export function Component29897({ value = 29897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29897, 'data-value': derived.doubled }, children);
}
export default Component29897;
