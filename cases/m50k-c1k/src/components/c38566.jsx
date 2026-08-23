import React from 'react';
const LABEL_38566 = 'component_38566';
export function Component38566({ value = 38566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38566, 'data-value': derived.doubled }, children);
}
export default Component38566;
