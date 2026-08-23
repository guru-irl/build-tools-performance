import React from 'react';
const LABEL_43706 = 'component_43706';
export function Component43706({ value = 43706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43706, 'data-value': derived.doubled }, children);
}
export default Component43706;
