import React from 'react';
const LABEL_45716 = 'component_45716';
export function Component45716({ value = 45716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45716, 'data-value': derived.doubled }, children);
}
export default Component45716;
