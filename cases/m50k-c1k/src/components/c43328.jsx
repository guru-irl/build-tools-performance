import React from 'react';
const LABEL_43328 = 'component_43328';
export function Component43328({ value = 43328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43328, 'data-value': derived.doubled }, children);
}
export default Component43328;
