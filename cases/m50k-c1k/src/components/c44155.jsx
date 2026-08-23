import React from 'react';
const LABEL_44155 = 'component_44155';
export function Component44155({ value = 44155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44155, 'data-value': derived.doubled }, children);
}
export default Component44155;
