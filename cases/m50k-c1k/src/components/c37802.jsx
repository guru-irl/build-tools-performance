import React from 'react';
const LABEL_37802 = 'component_37802';
export function Component37802({ value = 37802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37802, 'data-value': derived.doubled }, children);
}
export default Component37802;
