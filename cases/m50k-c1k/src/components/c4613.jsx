import React from 'react';
const LABEL_4613 = 'component_4613';
export function Component4613({ value = 4613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4613, 'data-value': derived.doubled }, children);
}
export default Component4613;
