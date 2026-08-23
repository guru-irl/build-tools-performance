import React from 'react';
const LABEL_43536 = 'component_43536';
export function Component43536({ value = 43536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43536, 'data-value': derived.doubled }, children);
}
export default Component43536;
