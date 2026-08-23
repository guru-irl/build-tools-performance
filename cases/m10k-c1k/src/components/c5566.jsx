import React from 'react';
const LABEL_5566 = 'component_5566';
export function Component5566({ value = 5566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5566, 'data-value': derived.doubled }, children);
}
export default Component5566;
