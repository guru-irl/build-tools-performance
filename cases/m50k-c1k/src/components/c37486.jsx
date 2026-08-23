import React from 'react';
const LABEL_37486 = 'component_37486';
export function Component37486({ value = 37486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37486, 'data-value': derived.doubled }, children);
}
export default Component37486;
