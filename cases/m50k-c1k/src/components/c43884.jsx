import React from 'react';
const LABEL_43884 = 'component_43884';
export function Component43884({ value = 43884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43884, 'data-value': derived.doubled }, children);
}
export default Component43884;
