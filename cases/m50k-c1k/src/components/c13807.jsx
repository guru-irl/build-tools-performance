import React from 'react';
const LABEL_13807 = 'component_13807';
export function Component13807({ value = 13807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13807, 'data-value': derived.doubled }, children);
}
export default Component13807;
