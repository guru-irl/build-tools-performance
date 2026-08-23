import React from 'react';
const LABEL_34806 = 'component_34806';
export function Component34806({ value = 34806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34806, 'data-value': derived.doubled }, children);
}
export default Component34806;
