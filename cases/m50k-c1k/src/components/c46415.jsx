import React from 'react';
const LABEL_46415 = 'component_46415';
export function Component46415({ value = 46415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46415, 'data-value': derived.doubled }, children);
}
export default Component46415;
