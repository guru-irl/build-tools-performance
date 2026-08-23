import React from 'react';
const LABEL_27663 = 'component_27663';
export function Component27663({ value = 27663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27663, 'data-value': derived.doubled }, children);
}
export default Component27663;
