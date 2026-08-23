import React from 'react';
const LABEL_19436 = 'component_19436';
export function Component19436({ value = 19436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19436, 'data-value': derived.doubled }, children);
}
export default Component19436;
