import React from 'react';
const LABEL_41454 = 'component_41454';
export function Component41454({ value = 41454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41454, 'data-value': derived.doubled }, children);
}
export default Component41454;
