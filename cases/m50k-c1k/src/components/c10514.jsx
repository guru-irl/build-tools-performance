import React from 'react';
const LABEL_10514 = 'component_10514';
export function Component10514({ value = 10514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10514, 'data-value': derived.doubled }, children);
}
export default Component10514;
