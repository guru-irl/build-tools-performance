import React from 'react';
const LABEL_8394 = 'component_8394';
export function Component8394({ value = 8394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8394, 'data-value': derived.doubled }, children);
}
export default Component8394;
