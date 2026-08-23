import React from 'react';
const LABEL_10212 = 'component_10212';
export function Component10212({ value = 10212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10212, 'data-value': derived.doubled }, children);
}
export default Component10212;
