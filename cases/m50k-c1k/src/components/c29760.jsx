import React from 'react';
const LABEL_29760 = 'component_29760';
export function Component29760({ value = 29760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29760, 'data-value': derived.doubled }, children);
}
export default Component29760;
