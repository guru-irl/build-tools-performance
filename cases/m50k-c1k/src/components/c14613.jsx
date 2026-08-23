import React from 'react';
const LABEL_14613 = 'component_14613';
export function Component14613({ value = 14613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14613, 'data-value': derived.doubled }, children);
}
export default Component14613;
