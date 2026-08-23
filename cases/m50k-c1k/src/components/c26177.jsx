import React from 'react';
const LABEL_26177 = 'component_26177';
export function Component26177({ value = 26177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26177, 'data-value': derived.doubled }, children);
}
export default Component26177;
