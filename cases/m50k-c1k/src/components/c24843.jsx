import React from 'react';
const LABEL_24843 = 'component_24843';
export function Component24843({ value = 24843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24843, 'data-value': derived.doubled }, children);
}
export default Component24843;
