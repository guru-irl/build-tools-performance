import React from 'react';
const LABEL_26978 = 'component_26978';
export function Component26978({ value = 26978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26978, 'data-value': derived.doubled }, children);
}
export default Component26978;
