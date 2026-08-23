import React from 'react';
const LABEL_41772 = 'component_41772';
export function Component41772({ value = 41772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41772, 'data-value': derived.doubled }, children);
}
export default Component41772;
