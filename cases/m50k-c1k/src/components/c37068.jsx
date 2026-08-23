import React from 'react';
const LABEL_37068 = 'component_37068';
export function Component37068({ value = 37068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37068, 'data-value': derived.doubled }, children);
}
export default Component37068;
