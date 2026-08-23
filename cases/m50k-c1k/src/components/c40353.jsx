import React from 'react';
const LABEL_40353 = 'component_40353';
export function Component40353({ value = 40353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40353, 'data-value': derived.doubled }, children);
}
export default Component40353;
