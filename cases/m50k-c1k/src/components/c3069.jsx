import React from 'react';
const LABEL_3069 = 'component_3069';
export function Component3069({ value = 3069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3069, 'data-value': derived.doubled }, children);
}
export default Component3069;
