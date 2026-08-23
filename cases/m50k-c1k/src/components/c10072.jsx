import React from 'react';
const LABEL_10072 = 'component_10072';
export function Component10072({ value = 10072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10072, 'data-value': derived.doubled }, children);
}
export default Component10072;
