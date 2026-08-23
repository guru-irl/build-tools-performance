import React from 'react';
const LABEL_3963 = 'component_3963';
export function Component3963({ value = 3963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3963, 'data-value': derived.doubled }, children);
}
export default Component3963;
