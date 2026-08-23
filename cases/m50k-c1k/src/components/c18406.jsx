import React from 'react';
const LABEL_18406 = 'component_18406';
export function Component18406({ value = 18406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18406, 'data-value': derived.doubled }, children);
}
export default Component18406;
