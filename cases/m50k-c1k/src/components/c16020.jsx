import React from 'react';
const LABEL_16020 = 'component_16020';
export function Component16020({ value = 16020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16020, 'data-value': derived.doubled }, children);
}
export default Component16020;
