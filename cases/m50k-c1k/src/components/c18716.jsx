import React from 'react';
const LABEL_18716 = 'component_18716';
export function Component18716({ value = 18716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18716, 'data-value': derived.doubled }, children);
}
export default Component18716;
