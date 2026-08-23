import React from 'react';
const LABEL_10498 = 'component_10498';
export function Component10498({ value = 10498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10498, 'data-value': derived.doubled }, children);
}
export default Component10498;
