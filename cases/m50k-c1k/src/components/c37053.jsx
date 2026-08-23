import React from 'react';
const LABEL_37053 = 'component_37053';
export function Component37053({ value = 37053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37053, 'data-value': derived.doubled }, children);
}
export default Component37053;
