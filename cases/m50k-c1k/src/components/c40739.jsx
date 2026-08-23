import React from 'react';
const LABEL_40739 = 'component_40739';
export function Component40739({ value = 40739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40739, 'data-value': derived.doubled }, children);
}
export default Component40739;
