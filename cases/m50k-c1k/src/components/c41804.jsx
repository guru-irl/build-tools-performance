import React from 'react';
const LABEL_41804 = 'component_41804';
export function Component41804({ value = 41804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41804, 'data-value': derived.doubled }, children);
}
export default Component41804;
