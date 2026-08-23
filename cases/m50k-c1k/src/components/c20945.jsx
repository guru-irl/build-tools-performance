import React from 'react';
const LABEL_20945 = 'component_20945';
export function Component20945({ value = 20945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20945, 'data-value': derived.doubled }, children);
}
export default Component20945;
