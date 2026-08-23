import React from 'react';
const LABEL_44141 = 'component_44141';
export function Component44141({ value = 44141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44141, 'data-value': derived.doubled }, children);
}
export default Component44141;
