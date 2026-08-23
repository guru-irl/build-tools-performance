import React from 'react';
const LABEL_33652 = 'component_33652';
export function Component33652({ value = 33652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33652, 'data-value': derived.doubled }, children);
}
export default Component33652;
