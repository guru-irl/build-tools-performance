import React from 'react';
const LABEL_41794 = 'component_41794';
export function Component41794({ value = 41794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41794, 'data-value': derived.doubled }, children);
}
export default Component41794;
