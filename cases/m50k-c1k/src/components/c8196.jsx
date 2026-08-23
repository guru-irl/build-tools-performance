import React from 'react';
const LABEL_8196 = 'component_8196';
export function Component8196({ value = 8196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8196, 'data-value': derived.doubled }, children);
}
export default Component8196;
