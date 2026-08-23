import React from 'react';
const LABEL_7353 = 'component_7353';
export function Component7353({ value = 7353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7353, 'data-value': derived.doubled }, children);
}
export default Component7353;
