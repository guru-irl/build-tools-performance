import React from 'react';
const LABEL_40780 = 'component_40780';
export function Component40780({ value = 40780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40780, 'data-value': derived.doubled }, children);
}
export default Component40780;
