import React from 'react';
const LABEL_41053 = 'component_41053';
export function Component41053({ value = 41053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41053, 'data-value': derived.doubled }, children);
}
export default Component41053;
