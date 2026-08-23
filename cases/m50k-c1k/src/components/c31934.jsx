import React from 'react';
const LABEL_31934 = 'component_31934';
export function Component31934({ value = 31934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31934, 'data-value': derived.doubled }, children);
}
export default Component31934;
