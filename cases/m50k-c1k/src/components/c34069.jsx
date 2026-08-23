import React from 'react';
const LABEL_34069 = 'component_34069';
export function Component34069({ value = 34069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34069, 'data-value': derived.doubled }, children);
}
export default Component34069;
