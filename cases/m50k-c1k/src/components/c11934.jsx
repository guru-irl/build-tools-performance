import React from 'react';
const LABEL_11934 = 'component_11934';
export function Component11934({ value = 11934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11934, 'data-value': derived.doubled }, children);
}
export default Component11934;
