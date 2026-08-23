import React from 'react';
const LABEL_40137 = 'component_40137';
export function Component40137({ value = 40137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40137, 'data-value': derived.doubled }, children);
}
export default Component40137;
