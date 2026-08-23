import React from 'react';
const LABEL_46512 = 'component_46512';
export function Component46512({ value = 46512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46512, 'data-value': derived.doubled }, children);
}
export default Component46512;
