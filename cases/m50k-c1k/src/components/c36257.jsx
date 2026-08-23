import React from 'react';
const LABEL_36257 = 'component_36257';
export function Component36257({ value = 36257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36257, 'data-value': derived.doubled }, children);
}
export default Component36257;
