import React from 'react';
const LABEL_43933 = 'component_43933';
export function Component43933({ value = 43933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43933, 'data-value': derived.doubled }, children);
}
export default Component43933;
