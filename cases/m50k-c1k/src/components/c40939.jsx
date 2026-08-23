import React from 'react';
const LABEL_40939 = 'component_40939';
export function Component40939({ value = 40939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40939, 'data-value': derived.doubled }, children);
}
export default Component40939;
