import React from 'react';
const LABEL_40796 = 'component_40796';
export function Component40796({ value = 40796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40796, 'data-value': derived.doubled }, children);
}
export default Component40796;
