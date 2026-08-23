import React from 'react';
const LABEL_1306 = 'component_1306';
export function Component1306({ value = 1306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1306, 'data-value': derived.doubled }, children);
}
export default Component1306;
