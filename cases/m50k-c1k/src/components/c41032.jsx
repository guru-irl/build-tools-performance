import React from 'react';
const LABEL_41032 = 'component_41032';
export function Component41032({ value = 41032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41032, 'data-value': derived.doubled }, children);
}
export default Component41032;
