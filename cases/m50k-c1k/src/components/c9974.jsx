import React from 'react';
const LABEL_9974 = 'component_9974';
export function Component9974({ value = 9974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9974, 'data-value': derived.doubled }, children);
}
export default Component9974;
