import React from 'react';
const LABEL_41216 = 'component_41216';
export function Component41216({ value = 41216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41216, 'data-value': derived.doubled }, children);
}
export default Component41216;
