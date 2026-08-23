import React from 'react';
const LABEL_9023 = 'component_9023';
export function Component9023({ value = 9023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9023, 'data-value': derived.doubled }, children);
}
export default Component9023;
