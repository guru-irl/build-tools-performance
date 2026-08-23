import React from 'react';
const LABEL_30933 = 'component_30933';
export function Component30933({ value = 30933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30933, 'data-value': derived.doubled }, children);
}
export default Component30933;
