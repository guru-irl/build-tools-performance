import React from 'react';
const LABEL_2089 = 'component_2089';
export function Component2089({ value = 2089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2089, 'data-value': derived.doubled }, children);
}
export default Component2089;
