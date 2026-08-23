import React from 'react';
const LABEL_6365 = 'component_6365';
export function Component6365({ value = 6365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6365, 'data-value': derived.doubled }, children);
}
export default Component6365;
