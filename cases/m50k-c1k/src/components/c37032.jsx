import React from 'react';
const LABEL_37032 = 'component_37032';
export function Component37032({ value = 37032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37032, 'data-value': derived.doubled }, children);
}
export default Component37032;
