import React from 'react';
const LABEL_43908 = 'component_43908';
export function Component43908({ value = 43908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43908, 'data-value': derived.doubled }, children);
}
export default Component43908;
