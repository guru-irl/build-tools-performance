import React from 'react';
const LABEL_44351 = 'component_44351';
export function Component44351({ value = 44351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44351, 'data-value': derived.doubled }, children);
}
export default Component44351;
