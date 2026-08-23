import React from 'react';
const LABEL_40344 = 'component_40344';
export function Component40344({ value = 40344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40344, 'data-value': derived.doubled }, children);
}
export default Component40344;
