import React from 'react';
const LABEL_8167 = 'component_8167';
export function Component8167({ value = 8167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8167, 'data-value': derived.doubled }, children);
}
export default Component8167;
