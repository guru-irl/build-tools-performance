import React from 'react';
const LABEL_24613 = 'component_24613';
export function Component24613({ value = 24613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24613, 'data-value': derived.doubled }, children);
}
export default Component24613;
