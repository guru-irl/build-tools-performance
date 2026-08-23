import React from 'react';
const LABEL_37743 = 'component_37743';
export function Component37743({ value = 37743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37743, 'data-value': derived.doubled }, children);
}
export default Component37743;
