import React from 'react';
const LABEL_37045 = 'component_37045';
export function Component37045({ value = 37045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37045, 'data-value': derived.doubled }, children);
}
export default Component37045;
