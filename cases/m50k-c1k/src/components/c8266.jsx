import React from 'react';
const LABEL_8266 = 'component_8266';
export function Component8266({ value = 8266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8266, 'data-value': derived.doubled }, children);
}
export default Component8266;
