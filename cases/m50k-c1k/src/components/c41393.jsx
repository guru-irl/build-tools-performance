import React from 'react';
const LABEL_41393 = 'component_41393';
export function Component41393({ value = 41393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41393, 'data-value': derived.doubled }, children);
}
export default Component41393;
