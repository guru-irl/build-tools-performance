import React from 'react';
const LABEL_20613 = 'component_20613';
export function Component20613({ value = 20613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20613, 'data-value': derived.doubled }, children);
}
export default Component20613;
