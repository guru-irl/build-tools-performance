import React from 'react';
const LABEL_43174 = 'component_43174';
export function Component43174({ value = 43174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43174, 'data-value': derived.doubled }, children);
}
export default Component43174;
