import React from 'react';
const LABEL_7956 = 'component_7956';
export function Component7956({ value = 7956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7956, 'data-value': derived.doubled }, children);
}
export default Component7956;
