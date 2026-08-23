import React from 'react';
const LABEL_46807 = 'component_46807';
export function Component46807({ value = 46807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46807, 'data-value': derived.doubled }, children);
}
export default Component46807;
