import React from 'react';
const LABEL_9327 = 'component_9327';
export function Component9327({ value = 9327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9327, 'data-value': derived.doubled }, children);
}
export default Component9327;
