import React from 'react';
const LABEL_37827 = 'component_37827';
export function Component37827({ value = 37827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37827, 'data-value': derived.doubled }, children);
}
export default Component37827;
