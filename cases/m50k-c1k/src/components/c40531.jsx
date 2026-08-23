import React from 'react';
const LABEL_40531 = 'component_40531';
export function Component40531({ value = 40531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40531, 'data-value': derived.doubled }, children);
}
export default Component40531;
