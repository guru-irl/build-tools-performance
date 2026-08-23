import React from 'react';
const LABEL_25963 = 'component_25963';
export function Component25963({ value = 25963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25963, 'data-value': derived.doubled }, children);
}
export default Component25963;
