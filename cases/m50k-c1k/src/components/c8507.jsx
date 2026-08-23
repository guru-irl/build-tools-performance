import React from 'react';
const LABEL_8507 = 'component_8507';
export function Component8507({ value = 8507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8507, 'data-value': derived.doubled }, children);
}
export default Component8507;
