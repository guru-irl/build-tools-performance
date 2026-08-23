import React from 'react';
const LABEL_45446 = 'component_45446';
export function Component45446({ value = 45446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45446, 'data-value': derived.doubled }, children);
}
export default Component45446;
