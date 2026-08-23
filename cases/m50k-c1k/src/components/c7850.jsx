import React from 'react';
const LABEL_7850 = 'component_7850';
export function Component7850({ value = 7850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7850, 'data-value': derived.doubled }, children);
}
export default Component7850;
