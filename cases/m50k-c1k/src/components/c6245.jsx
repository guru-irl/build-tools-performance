import React from 'react';
const LABEL_6245 = 'component_6245';
export function Component6245({ value = 6245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6245, 'data-value': derived.doubled }, children);
}
export default Component6245;
