import React from 'react';
const LABEL_34406 = 'component_34406';
export function Component34406({ value = 34406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34406, 'data-value': derived.doubled }, children);
}
export default Component34406;
