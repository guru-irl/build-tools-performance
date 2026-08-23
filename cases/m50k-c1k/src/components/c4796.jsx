import React from 'react';
const LABEL_4796 = 'component_4796';
export function Component4796({ value = 4796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4796, 'data-value': derived.doubled }, children);
}
export default Component4796;
