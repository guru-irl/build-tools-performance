import React from 'react';
const LABEL_46097 = 'component_46097';
export function Component46097({ value = 46097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46097, 'data-value': derived.doubled }, children);
}
export default Component46097;
