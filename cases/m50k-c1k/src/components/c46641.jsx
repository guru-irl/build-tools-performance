import React from 'react';
const LABEL_46641 = 'component_46641';
export function Component46641({ value = 46641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46641, 'data-value': derived.doubled }, children);
}
export default Component46641;
