import React from 'react';
const LABEL_41849 = 'component_41849';
export function Component41849({ value = 41849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41849, 'data-value': derived.doubled }, children);
}
export default Component41849;
