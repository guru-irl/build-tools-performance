import React from 'react';
const LABEL_41759 = 'component_41759';
export function Component41759({ value = 41759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41759, 'data-value': derived.doubled }, children);
}
export default Component41759;
