import React from 'react';
const LABEL_42522 = 'component_42522';
export function Component42522({ value = 42522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42522, 'data-value': derived.doubled }, children);
}
export default Component42522;
