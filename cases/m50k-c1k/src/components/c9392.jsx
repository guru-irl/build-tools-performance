import React from 'react';
const LABEL_9392 = 'component_9392';
export function Component9392({ value = 9392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9392, 'data-value': derived.doubled }, children);
}
export default Component9392;
