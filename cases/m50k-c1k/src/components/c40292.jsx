import React from 'react';
const LABEL_40292 = 'component_40292';
export function Component40292({ value = 40292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40292, 'data-value': derived.doubled }, children);
}
export default Component40292;
