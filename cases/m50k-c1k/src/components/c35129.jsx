import React from 'react';
const LABEL_35129 = 'component_35129';
export function Component35129({ value = 35129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35129, 'data-value': derived.doubled }, children);
}
export default Component35129;
