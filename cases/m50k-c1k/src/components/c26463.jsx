import React from 'react';
const LABEL_26463 = 'component_26463';
export function Component26463({ value = 26463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26463, 'data-value': derived.doubled }, children);
}
export default Component26463;
