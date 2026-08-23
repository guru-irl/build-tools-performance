import React from 'react';
const LABEL_5199 = 'component_5199';
export function Component5199({ value = 5199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5199, 'data-value': derived.doubled }, children);
}
export default Component5199;
