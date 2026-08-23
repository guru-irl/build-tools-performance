import React from 'react';
const LABEL_34072 = 'component_34072';
export function Component34072({ value = 34072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34072, 'data-value': derived.doubled }, children);
}
export default Component34072;
