import React from 'react';
const LABEL_41071 = 'component_41071';
export function Component41071({ value = 41071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41071, 'data-value': derived.doubled }, children);
}
export default Component41071;
