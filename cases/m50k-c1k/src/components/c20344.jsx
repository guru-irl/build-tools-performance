import React from 'react';
const LABEL_20344 = 'component_20344';
export function Component20344({ value = 20344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20344, 'data-value': derived.doubled }, children);
}
export default Component20344;
