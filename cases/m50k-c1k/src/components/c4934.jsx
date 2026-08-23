import React from 'react';
const LABEL_4934 = 'component_4934';
export function Component4934({ value = 4934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4934, 'data-value': derived.doubled }, children);
}
export default Component4934;
