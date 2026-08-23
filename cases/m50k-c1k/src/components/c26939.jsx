import React from 'react';
const LABEL_26939 = 'component_26939';
export function Component26939({ value = 26939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26939, 'data-value': derived.doubled }, children);
}
export default Component26939;
