import React from 'react';
const LABEL_35556 = 'component_35556';
export function Component35556({ value = 35556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35556, 'data-value': derived.doubled }, children);
}
export default Component35556;
