import React from 'react';
const LABEL_26432 = 'component_26432';
export function Component26432({ value = 26432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26432, 'data-value': derived.doubled }, children);
}
export default Component26432;
