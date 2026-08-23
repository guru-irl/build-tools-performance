import React from 'react';
const LABEL_8050 = 'component_8050';
export function Component8050({ value = 8050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8050, 'data-value': derived.doubled }, children);
}
export default Component8050;
