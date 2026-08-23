import React from 'react';
const LABEL_38963 = 'component_38963';
export function Component38963({ value = 38963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38963, 'data-value': derived.doubled }, children);
}
export default Component38963;
