import React from 'react';
const LABEL_40760 = 'component_40760';
export function Component40760({ value = 40760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40760, 'data-value': derived.doubled }, children);
}
export default Component40760;
