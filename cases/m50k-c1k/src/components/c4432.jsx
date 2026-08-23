import React from 'react';
const LABEL_4432 = 'component_4432';
export function Component4432({ value = 4432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4432, 'data-value': derived.doubled }, children);
}
export default Component4432;
