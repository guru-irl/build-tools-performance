import React from 'react';
const LABEL_19483 = 'component_19483';
export function Component19483({ value = 19483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19483, 'data-value': derived.doubled }, children);
}
export default Component19483;
