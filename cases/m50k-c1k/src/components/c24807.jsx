import React from 'react';
const LABEL_24807 = 'component_24807';
export function Component24807({ value = 24807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24807, 'data-value': derived.doubled }, children);
}
export default Component24807;
