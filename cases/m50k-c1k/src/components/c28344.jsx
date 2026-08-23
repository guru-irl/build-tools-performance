import React from 'react';
const LABEL_28344 = 'component_28344';
export function Component28344({ value = 28344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28344, 'data-value': derived.doubled }, children);
}
export default Component28344;
