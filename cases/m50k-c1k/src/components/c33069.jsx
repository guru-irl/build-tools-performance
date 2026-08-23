import React from 'react';
const LABEL_33069 = 'component_33069';
export function Component33069({ value = 33069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33069, 'data-value': derived.doubled }, children);
}
export default Component33069;
