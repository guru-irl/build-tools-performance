import React from 'react';
const LABEL_8325 = 'component_8325';
export function Component8325({ value = 8325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8325, 'data-value': derived.doubled }, children);
}
export default Component8325;
