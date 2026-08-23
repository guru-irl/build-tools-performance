import React from 'react';
const LABEL_34409 = 'component_34409';
export function Component34409({ value = 34409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34409, 'data-value': derived.doubled }, children);
}
export default Component34409;
