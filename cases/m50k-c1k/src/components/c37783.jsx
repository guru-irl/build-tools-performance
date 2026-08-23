import React from 'react';
const LABEL_37783 = 'component_37783';
export function Component37783({ value = 37783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37783, 'data-value': derived.doubled }, children);
}
export default Component37783;
