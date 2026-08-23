import React from 'react';
const LABEL_8725 = 'component_8725';
export function Component8725({ value = 8725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8725, 'data-value': derived.doubled }, children);
}
export default Component8725;
