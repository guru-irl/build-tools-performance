import React from 'react';
const LABEL_41045 = 'component_41045';
export function Component41045({ value = 41045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41045, 'data-value': derived.doubled }, children);
}
export default Component41045;
