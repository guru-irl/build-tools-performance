import React from 'react';
const LABEL_41173 = 'component_41173';
export function Component41173({ value = 41173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41173, 'data-value': derived.doubled }, children);
}
export default Component41173;
