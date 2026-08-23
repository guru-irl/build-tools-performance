import React from 'react';
const LABEL_35851 = 'component_35851';
export function Component35851({ value = 35851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35851, 'data-value': derived.doubled }, children);
}
export default Component35851;
