import React from 'react';
const LABEL_46417 = 'component_46417';
export function Component46417({ value = 46417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46417, 'data-value': derived.doubled }, children);
}
export default Component46417;
