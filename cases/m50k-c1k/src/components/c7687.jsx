import React from 'react';
const LABEL_7687 = 'component_7687';
export function Component7687({ value = 7687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7687, 'data-value': derived.doubled }, children);
}
export default Component7687;
