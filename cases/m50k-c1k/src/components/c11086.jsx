import React from 'react';
const LABEL_11086 = 'component_11086';
export function Component11086({ value = 11086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11086, 'data-value': derived.doubled }, children);
}
export default Component11086;
