import React from 'react';
const LABEL_41072 = 'component_41072';
export function Component41072({ value = 41072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41072, 'data-value': derived.doubled }, children);
}
export default Component41072;
