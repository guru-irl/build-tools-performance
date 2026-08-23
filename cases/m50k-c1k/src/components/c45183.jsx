import React from 'react';
const LABEL_45183 = 'component_45183';
export function Component45183({ value = 45183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45183, 'data-value': derived.doubled }, children);
}
export default Component45183;
