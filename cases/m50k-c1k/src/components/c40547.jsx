import React from 'react';
const LABEL_40547 = 'component_40547';
export function Component40547({ value = 40547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40547, 'data-value': derived.doubled }, children);
}
export default Component40547;
