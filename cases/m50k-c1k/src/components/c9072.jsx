import React from 'react';
const LABEL_9072 = 'component_9072';
export function Component9072({ value = 9072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9072, 'data-value': derived.doubled }, children);
}
export default Component9072;
