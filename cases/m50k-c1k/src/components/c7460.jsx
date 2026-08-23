import React from 'react';
const LABEL_7460 = 'component_7460';
export function Component7460({ value = 7460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7460, 'data-value': derived.doubled }, children);
}
export default Component7460;
