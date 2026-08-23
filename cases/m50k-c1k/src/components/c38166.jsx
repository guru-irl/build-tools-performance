import React from 'react';
const LABEL_38166 = 'component_38166';
export function Component38166({ value = 38166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38166, 'data-value': derived.doubled }, children);
}
export default Component38166;
