import React from 'react';
const LABEL_21672 = 'component_21672';
export function Component21672({ value = 21672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21672, 'data-value': derived.doubled }, children);
}
export default Component21672;
