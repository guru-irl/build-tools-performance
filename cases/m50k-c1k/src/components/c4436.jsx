import React from 'react';
const LABEL_4436 = 'component_4436';
export function Component4436({ value = 4436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4436, 'data-value': derived.doubled }, children);
}
export default Component4436;
