import React from 'react';
const LABEL_45559 = 'component_45559';
export function Component45559({ value = 45559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45559, 'data-value': derived.doubled }, children);
}
export default Component45559;
