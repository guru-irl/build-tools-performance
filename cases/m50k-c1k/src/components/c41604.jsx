import React from 'react';
const LABEL_41604 = 'component_41604';
export function Component41604({ value = 41604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41604, 'data-value': derived.doubled }, children);
}
export default Component41604;
