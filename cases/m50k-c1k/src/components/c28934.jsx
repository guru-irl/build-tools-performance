import React from 'react';
const LABEL_28934 = 'component_28934';
export function Component28934({ value = 28934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28934, 'data-value': derived.doubled }, children);
}
export default Component28934;
