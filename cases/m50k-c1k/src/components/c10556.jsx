import React from 'react';
const LABEL_10556 = 'component_10556';
export function Component10556({ value = 10556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10556, 'data-value': derived.doubled }, children);
}
export default Component10556;
