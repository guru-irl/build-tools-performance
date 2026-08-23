import React from 'react';
const LABEL_16892 = 'component_16892';
export function Component16892({ value = 16892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16892, 'data-value': derived.doubled }, children);
}
export default Component16892;
