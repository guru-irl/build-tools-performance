import React from 'react';
const LABEL_24901 = 'component_24901';
export function Component24901({ value = 24901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24901, 'data-value': derived.doubled }, children);
}
export default Component24901;
