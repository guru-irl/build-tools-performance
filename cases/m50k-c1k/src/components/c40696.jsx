import React from 'react';
const LABEL_40696 = 'component_40696';
export function Component40696({ value = 40696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40696, 'data-value': derived.doubled }, children);
}
export default Component40696;
