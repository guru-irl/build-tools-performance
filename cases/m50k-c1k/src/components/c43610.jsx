import React from 'react';
const LABEL_43610 = 'component_43610';
export function Component43610({ value = 43610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43610, 'data-value': derived.doubled }, children);
}
export default Component43610;
