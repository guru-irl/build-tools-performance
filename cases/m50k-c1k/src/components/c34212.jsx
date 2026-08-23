import React from 'react';
const LABEL_34212 = 'component_34212';
export function Component34212({ value = 34212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34212, 'data-value': derived.doubled }, children);
}
export default Component34212;
