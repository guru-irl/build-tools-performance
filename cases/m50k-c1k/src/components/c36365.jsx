import React from 'react';
const LABEL_36365 = 'component_36365';
export function Component36365({ value = 36365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36365, 'data-value': derived.doubled }, children);
}
export default Component36365;
