import React from 'react';
const LABEL_4939 = 'component_4939';
export function Component4939({ value = 4939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4939, 'data-value': derived.doubled }, children);
}
export default Component4939;
