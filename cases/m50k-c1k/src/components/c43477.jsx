import React from 'react';
const LABEL_43477 = 'component_43477';
export function Component43477({ value = 43477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43477, 'data-value': derived.doubled }, children);
}
export default Component43477;
