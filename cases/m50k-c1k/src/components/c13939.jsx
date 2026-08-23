import React from 'react';
const LABEL_13939 = 'component_13939';
export function Component13939({ value = 13939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13939, 'data-value': derived.doubled }, children);
}
export default Component13939;
