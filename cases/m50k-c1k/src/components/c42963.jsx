import React from 'react';
const LABEL_42963 = 'component_42963';
export function Component42963({ value = 42963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42963, 'data-value': derived.doubled }, children);
}
export default Component42963;
