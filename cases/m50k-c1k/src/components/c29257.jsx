import React from 'react';
const LABEL_29257 = 'component_29257';
export function Component29257({ value = 29257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29257, 'data-value': derived.doubled }, children);
}
export default Component29257;
