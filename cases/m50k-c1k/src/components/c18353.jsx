import React from 'react';
const LABEL_18353 = 'component_18353';
export function Component18353({ value = 18353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18353, 'data-value': derived.doubled }, children);
}
export default Component18353;
