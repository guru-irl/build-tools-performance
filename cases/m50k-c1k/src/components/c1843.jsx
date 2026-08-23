import React from 'react';
const LABEL_1843 = 'component_1843';
export function Component1843({ value = 1843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1843, 'data-value': derived.doubled }, children);
}
export default Component1843;
