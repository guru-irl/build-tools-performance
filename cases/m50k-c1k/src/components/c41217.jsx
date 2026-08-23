import React from 'react';
const LABEL_41217 = 'component_41217';
export function Component41217({ value = 41217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41217, 'data-value': derived.doubled }, children);
}
export default Component41217;
