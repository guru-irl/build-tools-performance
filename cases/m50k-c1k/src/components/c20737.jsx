import React from 'react';
const LABEL_20737 = 'component_20737';
export function Component20737({ value = 20737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20737, 'data-value': derived.doubled }, children);
}
export default Component20737;
