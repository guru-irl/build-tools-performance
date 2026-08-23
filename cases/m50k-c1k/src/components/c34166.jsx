import React from 'react';
const LABEL_34166 = 'component_34166';
export function Component34166({ value = 34166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34166, 'data-value': derived.doubled }, children);
}
export default Component34166;
