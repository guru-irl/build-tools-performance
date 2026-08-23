import React from 'react';
const LABEL_43248 = 'component_43248';
export function Component43248({ value = 43248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43248, 'data-value': derived.doubled }, children);
}
export default Component43248;
