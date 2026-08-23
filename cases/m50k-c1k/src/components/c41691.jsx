import React from 'react';
const LABEL_41691 = 'component_41691';
export function Component41691({ value = 41691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41691, 'data-value': derived.doubled }, children);
}
export default Component41691;
