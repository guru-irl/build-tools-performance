import React from 'react';
const LABEL_41488 = 'component_41488';
export function Component41488({ value = 41488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41488, 'data-value': derived.doubled }, children);
}
export default Component41488;
