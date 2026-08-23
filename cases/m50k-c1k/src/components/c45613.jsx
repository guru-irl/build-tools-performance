import React from 'react';
const LABEL_45613 = 'component_45613';
export function Component45613({ value = 45613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45613, 'data-value': derived.doubled }, children);
}
export default Component45613;
