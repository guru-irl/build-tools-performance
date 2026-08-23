import React from 'react';
const LABEL_29963 = 'component_29963';
export function Component29963({ value = 29963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29963, 'data-value': derived.doubled }, children);
}
export default Component29963;
