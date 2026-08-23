import React from 'react';
const LABEL_43704 = 'component_43704';
export function Component43704({ value = 43704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43704, 'data-value': derived.doubled }, children);
}
export default Component43704;
