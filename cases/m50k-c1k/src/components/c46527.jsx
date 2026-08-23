import React from 'react';
const LABEL_46527 = 'component_46527';
export function Component46527({ value = 46527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46527, 'data-value': derived.doubled }, children);
}
export default Component46527;
