import React from 'react';
const LABEL_36072 = 'component_36072';
export function Component36072({ value = 36072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36072, 'data-value': derived.doubled }, children);
}
export default Component36072;
