import React from 'react';
const LABEL_19613 = 'component_19613';
export function Component19613({ value = 19613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19613, 'data-value': derived.doubled }, children);
}
export default Component19613;
