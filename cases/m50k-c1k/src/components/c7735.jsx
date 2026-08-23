import React from 'react';
const LABEL_7735 = 'component_7735';
export function Component7735({ value = 7735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7735, 'data-value': derived.doubled }, children);
}
export default Component7735;
