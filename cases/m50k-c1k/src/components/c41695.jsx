import React from 'react';
const LABEL_41695 = 'component_41695';
export function Component41695({ value = 41695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41695, 'data-value': derived.doubled }, children);
}
export default Component41695;
