import React from 'react';
const LABEL_2760 = 'component_2760';
export function Component2760({ value = 2760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2760, 'data-value': derived.doubled }, children);
}
export default Component2760;
