import React from 'react';
const LABEL_8263 = 'component_8263';
export function Component8263({ value = 8263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8263, 'data-value': derived.doubled }, children);
}
export default Component8263;
