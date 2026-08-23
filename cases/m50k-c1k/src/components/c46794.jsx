import React from 'react';
const LABEL_46794 = 'component_46794';
export function Component46794({ value = 46794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46794, 'data-value': derived.doubled }, children);
}
export default Component46794;
