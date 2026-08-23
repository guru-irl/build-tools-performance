import React from 'react';
const LABEL_46482 = 'component_46482';
export function Component46482({ value = 46482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46482, 'data-value': derived.doubled }, children);
}
export default Component46482;
