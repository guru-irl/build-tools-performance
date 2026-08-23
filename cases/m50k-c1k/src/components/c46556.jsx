import React from 'react';
const LABEL_46556 = 'component_46556';
export function Component46556({ value = 46556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46556, 'data-value': derived.doubled }, children);
}
export default Component46556;
