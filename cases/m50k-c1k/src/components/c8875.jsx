import React from 'react';
const LABEL_8875 = 'component_8875';
export function Component8875({ value = 8875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8875, 'data-value': derived.doubled }, children);
}
export default Component8875;
