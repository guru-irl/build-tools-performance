import React from 'react';
const LABEL_12566 = 'component_12566';
export function Component12566({ value = 12566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12566, 'data-value': derived.doubled }, children);
}
export default Component12566;
