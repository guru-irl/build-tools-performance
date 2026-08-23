import React from 'react';
const LABEL_29183 = 'component_29183';
export function Component29183({ value = 29183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29183, 'data-value': derived.doubled }, children);
}
export default Component29183;
