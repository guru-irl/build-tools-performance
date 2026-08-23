import React from 'react';
const LABEL_46242 = 'component_46242';
export function Component46242({ value = 46242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46242, 'data-value': derived.doubled }, children);
}
export default Component46242;
