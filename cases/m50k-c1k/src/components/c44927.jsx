import React from 'react';
const LABEL_44927 = 'component_44927';
export function Component44927({ value = 44927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44927, 'data-value': derived.doubled }, children);
}
export default Component44927;
