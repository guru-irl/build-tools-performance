import React from 'react';
const LABEL_25069 = 'component_25069';
export function Component25069({ value = 25069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25069, 'data-value': derived.doubled }, children);
}
export default Component25069;
