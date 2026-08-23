import React from 'react';
const LABEL_21089 = 'component_21089';
export function Component21089({ value = 21089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21089, 'data-value': derived.doubled }, children);
}
export default Component21089;
