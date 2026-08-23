import React from 'react';
const LABEL_28939 = 'component_28939';
export function Component28939({ value = 28939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28939, 'data-value': derived.doubled }, children);
}
export default Component28939;
