import React from 'react';
const LABEL_5613 = 'component_5613';
export function Component5613({ value = 5613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5613, 'data-value': derived.doubled }, children);
}
export default Component5613;
