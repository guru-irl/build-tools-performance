import React from 'react';
const LABEL_3394 = 'component_3394';
export function Component3394({ value = 3394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3394, 'data-value': derived.doubled }, children);
}
export default Component3394;
