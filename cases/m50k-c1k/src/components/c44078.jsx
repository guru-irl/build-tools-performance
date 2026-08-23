import React from 'react';
const LABEL_44078 = 'component_44078';
export function Component44078({ value = 44078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44078, 'data-value': derived.doubled }, children);
}
export default Component44078;
