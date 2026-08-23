import React from 'react';
const LABEL_45498 = 'component_45498';
export function Component45498({ value = 45498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45498, 'data-value': derived.doubled }, children);
}
export default Component45498;
