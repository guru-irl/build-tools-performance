import React from 'react';
const LABEL_35049 = 'component_35049';
export function Component35049({ value = 35049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35049, 'data-value': derived.doubled }, children);
}
export default Component35049;
