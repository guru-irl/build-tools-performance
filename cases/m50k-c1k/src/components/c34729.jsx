import React from 'react';
const LABEL_34729 = 'component_34729';
export function Component34729({ value = 34729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34729, 'data-value': derived.doubled }, children);
}
export default Component34729;
