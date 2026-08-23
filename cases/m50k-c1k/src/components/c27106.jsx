import React from 'react';
const LABEL_27106 = 'component_27106';
export function Component27106({ value = 27106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27106, 'data-value': derived.doubled }, children);
}
export default Component27106;
