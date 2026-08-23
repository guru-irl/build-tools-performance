import React from 'react';
const LABEL_43537 = 'component_43537';
export function Component43537({ value = 43537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43537, 'data-value': derived.doubled }, children);
}
export default Component43537;
