import React from 'react';
const LABEL_45289 = 'component_45289';
export function Component45289({ value = 45289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45289, 'data-value': derived.doubled }, children);
}
export default Component45289;
