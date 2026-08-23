import React from 'react';
const LABEL_32523 = 'component_32523';
export function Component32523({ value = 32523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32523, 'data-value': derived.doubled }, children);
}
export default Component32523;
