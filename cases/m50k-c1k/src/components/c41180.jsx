import React from 'react';
const LABEL_41180 = 'component_41180';
export function Component41180({ value = 41180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41180, 'data-value': derived.doubled }, children);
}
export default Component41180;
