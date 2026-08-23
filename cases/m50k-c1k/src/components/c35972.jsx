import React from 'react';
const LABEL_35972 = 'component_35972';
export function Component35972({ value = 35972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35972, 'data-value': derived.doubled }, children);
}
export default Component35972;
