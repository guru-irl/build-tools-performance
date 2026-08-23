import React from 'react';
const LABEL_22456 = 'component_22456';
export function Component22456({ value = 22456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22456, 'data-value': derived.doubled }, children);
}
export default Component22456;
