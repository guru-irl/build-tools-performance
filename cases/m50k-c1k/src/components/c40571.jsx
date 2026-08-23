import React from 'react';
const LABEL_40571 = 'component_40571';
export function Component40571({ value = 40571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40571, 'data-value': derived.doubled }, children);
}
export default Component40571;
