import React from 'react';
const LABEL_41813 = 'component_41813';
export function Component41813({ value = 41813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41813, 'data-value': derived.doubled }, children);
}
export default Component41813;
