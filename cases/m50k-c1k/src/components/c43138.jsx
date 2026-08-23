import React from 'react';
const LABEL_43138 = 'component_43138';
export function Component43138({ value = 43138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43138, 'data-value': derived.doubled }, children);
}
export default Component43138;
