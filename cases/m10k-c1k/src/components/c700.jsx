import React from 'react';
const LABEL_700 = 'component_700';
export function Component700({ value = 700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_700, 'data-value': derived.doubled }, children);
}
export default Component700;
