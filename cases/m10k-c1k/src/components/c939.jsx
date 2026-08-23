import React from 'react';
const LABEL_939 = 'component_939';
export function Component939({ value = 939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_939, 'data-value': derived.doubled }, children);
}
export default Component939;
