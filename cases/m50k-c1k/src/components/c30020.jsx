import React from 'react';
const LABEL_30020 = 'component_30020';
export function Component30020({ value = 30020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30020, 'data-value': derived.doubled }, children);
}
export default Component30020;
