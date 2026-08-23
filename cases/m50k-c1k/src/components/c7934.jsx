import React from 'react';
const LABEL_7934 = 'component_7934';
export function Component7934({ value = 7934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7934, 'data-value': derived.doubled }, children);
}
export default Component7934;
