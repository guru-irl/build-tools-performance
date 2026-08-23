import React from 'react';
const LABEL_19691 = 'component_19691';
export function Component19691({ value = 19691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19691, 'data-value': derived.doubled }, children);
}
export default Component19691;
