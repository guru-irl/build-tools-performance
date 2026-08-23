import React from 'react';
const LABEL_41847 = 'component_41847';
export function Component41847({ value = 41847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41847, 'data-value': derived.doubled }, children);
}
export default Component41847;
