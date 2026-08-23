import React from 'react';
const LABEL_30939 = 'component_30939';
export function Component30939({ value = 30939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30939, 'data-value': derived.doubled }, children);
}
export default Component30939;
