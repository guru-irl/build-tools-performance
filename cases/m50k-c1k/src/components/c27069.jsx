import React from 'react';
const LABEL_27069 = 'component_27069';
export function Component27069({ value = 27069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27069, 'data-value': derived.doubled }, children);
}
export default Component27069;
