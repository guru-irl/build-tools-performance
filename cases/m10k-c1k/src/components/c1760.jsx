import React from 'react';
const LABEL_1760 = 'component_1760';
export function Component1760({ value = 1760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1760, 'data-value': derived.doubled }, children);
}
export default Component1760;
