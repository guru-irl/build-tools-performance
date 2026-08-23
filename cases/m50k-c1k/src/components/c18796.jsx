import React from 'react';
const LABEL_18796 = 'component_18796';
export function Component18796({ value = 18796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18796, 'data-value': derived.doubled }, children);
}
export default Component18796;
