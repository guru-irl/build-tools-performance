import React from 'react';
const LABEL_38716 = 'component_38716';
export function Component38716({ value = 38716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38716, 'data-value': derived.doubled }, children);
}
export default Component38716;
