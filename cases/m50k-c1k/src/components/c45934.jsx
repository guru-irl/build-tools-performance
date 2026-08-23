import React from 'react';
const LABEL_45934 = 'component_45934';
export function Component45934({ value = 45934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45934, 'data-value': derived.doubled }, children);
}
export default Component45934;
