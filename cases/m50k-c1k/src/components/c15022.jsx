import React from 'react';
const LABEL_15022 = 'component_15022';
export function Component15022({ value = 15022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15022, 'data-value': derived.doubled }, children);
}
export default Component15022;
