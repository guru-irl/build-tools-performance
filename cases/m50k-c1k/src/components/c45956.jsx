import React from 'react';
const LABEL_45956 = 'component_45956';
export function Component45956({ value = 45956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45956, 'data-value': derived.doubled }, children);
}
export default Component45956;
