import React from 'react';
const LABEL_46452 = 'component_46452';
export function Component46452({ value = 46452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46452, 'data-value': derived.doubled }, children);
}
export default Component46452;
