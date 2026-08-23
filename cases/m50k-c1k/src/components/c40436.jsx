import React from 'react';
const LABEL_40436 = 'component_40436';
export function Component40436({ value = 40436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40436, 'data-value': derived.doubled }, children);
}
export default Component40436;
