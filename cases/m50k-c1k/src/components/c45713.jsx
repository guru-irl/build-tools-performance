import React from 'react';
const LABEL_45713 = 'component_45713';
export function Component45713({ value = 45713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45713, 'data-value': derived.doubled }, children);
}
export default Component45713;
