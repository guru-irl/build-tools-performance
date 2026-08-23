import React from 'react';
const LABEL_37523 = 'component_37523';
export function Component37523({ value = 37523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37523, 'data-value': derived.doubled }, children);
}
export default Component37523;
