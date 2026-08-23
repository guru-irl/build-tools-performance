import React from 'react';
const LABEL_30547 = 'component_30547';
export function Component30547({ value = 30547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30547, 'data-value': derived.doubled }, children);
}
export default Component30547;
