import React from 'react';
const LABEL_45780 = 'component_45780';
export function Component45780({ value = 45780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45780, 'data-value': derived.doubled }, children);
}
export default Component45780;
