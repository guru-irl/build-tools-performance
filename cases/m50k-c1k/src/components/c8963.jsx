import React from 'react';
const LABEL_8963 = 'component_8963';
export function Component8963({ value = 8963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8963, 'data-value': derived.doubled }, children);
}
export default Component8963;
