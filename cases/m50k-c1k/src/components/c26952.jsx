import React from 'react';
const LABEL_26952 = 'component_26952';
export function Component26952({ value = 26952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26952, 'data-value': derived.doubled }, children);
}
export default Component26952;
