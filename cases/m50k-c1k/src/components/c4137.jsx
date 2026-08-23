import React from 'react';
const LABEL_4137 = 'component_4137';
export function Component4137({ value = 4137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4137, 'data-value': derived.doubled }, children);
}
export default Component4137;
