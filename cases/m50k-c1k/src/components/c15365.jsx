import React from 'react';
const LABEL_15365 = 'component_15365';
export function Component15365({ value = 15365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15365, 'data-value': derived.doubled }, children);
}
export default Component15365;
