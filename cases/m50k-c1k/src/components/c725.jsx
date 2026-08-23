import React from 'react';
const LABEL_725 = 'component_725';
export function Component725({ value = 725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_725, 'data-value': derived.doubled }, children);
}
export default Component725;
