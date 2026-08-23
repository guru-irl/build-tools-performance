import React from 'react';
const LABEL_23620 = 'component_23620';
export function Component23620({ value = 23620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23620, 'data-value': derived.doubled }, children);
}
export default Component23620;
