import React from 'react';
const LABEL_28365 = 'component_28365';
export function Component28365({ value = 28365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28365, 'data-value': derived.doubled }, children);
}
export default Component28365;
