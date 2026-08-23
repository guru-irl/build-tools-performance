import React from 'react';
const LABEL_41125 = 'component_41125';
export function Component41125({ value = 41125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41125, 'data-value': derived.doubled }, children);
}
export default Component41125;
