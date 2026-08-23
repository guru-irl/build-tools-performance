import React from 'react';
const LABEL_29807 = 'component_29807';
export function Component29807({ value = 29807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29807, 'data-value': derived.doubled }, children);
}
export default Component29807;
