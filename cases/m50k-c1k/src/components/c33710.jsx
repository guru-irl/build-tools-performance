import React from 'react';
const LABEL_33710 = 'component_33710';
export function Component33710({ value = 33710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33710, 'data-value': derived.doubled }, children);
}
export default Component33710;
