import React from 'react';
const LABEL_4044 = 'component_4044';
export function Component4044({ value = 4044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4044, 'data-value': derived.doubled }, children);
}
export default Component4044;
