import React from 'react';
const LABEL_8072 = 'component_8072';
export function Component8072({ value = 8072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8072, 'data-value': derived.doubled }, children);
}
export default Component8072;
