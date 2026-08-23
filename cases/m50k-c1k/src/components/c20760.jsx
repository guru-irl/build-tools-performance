import React from 'react';
const LABEL_20760 = 'component_20760';
export function Component20760({ value = 20760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20760, 'data-value': derived.doubled }, children);
}
export default Component20760;
