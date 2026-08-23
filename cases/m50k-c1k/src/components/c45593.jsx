import React from 'react';
const LABEL_45593 = 'component_45593';
export function Component45593({ value = 45593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45593, 'data-value': derived.doubled }, children);
}
export default Component45593;
