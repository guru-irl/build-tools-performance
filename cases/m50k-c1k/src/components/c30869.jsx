import React from 'react';
const LABEL_30869 = 'component_30869';
export function Component30869({ value = 30869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30869, 'data-value': derived.doubled }, children);
}
export default Component30869;
