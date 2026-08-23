import React from 'react';
const LABEL_23407 = 'component_23407';
export function Component23407({ value = 23407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23407, 'data-value': derived.doubled }, children);
}
export default Component23407;
