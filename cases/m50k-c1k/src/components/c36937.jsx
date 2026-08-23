import React from 'react';
const LABEL_36937 = 'component_36937';
export function Component36937({ value = 36937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36937, 'data-value': derived.doubled }, children);
}
export default Component36937;
