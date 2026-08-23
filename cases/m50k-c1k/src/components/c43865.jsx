import React from 'react';
const LABEL_43865 = 'component_43865';
export function Component43865({ value = 43865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43865, 'data-value': derived.doubled }, children);
}
export default Component43865;
