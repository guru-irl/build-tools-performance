import React from 'react';
const LABEL_23049 = 'component_23049';
export function Component23049({ value = 23049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23049, 'data-value': derived.doubled }, children);
}
export default Component23049;
