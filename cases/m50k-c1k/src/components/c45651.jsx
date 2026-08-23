import React from 'react';
const LABEL_45651 = 'component_45651';
export function Component45651({ value = 45651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45651, 'data-value': derived.doubled }, children);
}
export default Component45651;
