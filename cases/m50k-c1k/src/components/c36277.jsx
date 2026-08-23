import React from 'react';
const LABEL_36277 = 'component_36277';
export function Component36277({ value = 36277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36277, 'data-value': derived.doubled }, children);
}
export default Component36277;
