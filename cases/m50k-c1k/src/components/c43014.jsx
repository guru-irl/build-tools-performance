import React from 'react';
const LABEL_43014 = 'component_43014';
export function Component43014({ value = 43014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43014, 'data-value': derived.doubled }, children);
}
export default Component43014;
