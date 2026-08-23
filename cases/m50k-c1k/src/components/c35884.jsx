import React from 'react';
const LABEL_35884 = 'component_35884';
export function Component35884({ value = 35884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35884, 'data-value': derived.doubled }, children);
}
export default Component35884;
