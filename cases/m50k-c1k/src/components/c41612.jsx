import React from 'react';
const LABEL_41612 = 'component_41612';
export function Component41612({ value = 41612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41612, 'data-value': derived.doubled }, children);
}
export default Component41612;
