import React from 'react';
const LABEL_36349 = 'component_36349';
export function Component36349({ value = 36349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36349, 'data-value': derived.doubled }, children);
}
export default Component36349;
