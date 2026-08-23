import React from 'react';
const LABEL_30556 = 'component_30556';
export function Component30556({ value = 30556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30556, 'data-value': derived.doubled }, children);
}
export default Component30556;
