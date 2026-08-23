import React from 'react';
const LABEL_436 = 'component_436';
export function Component436({ value = 436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_436, 'data-value': derived.doubled }, children);
}
export default Component436;
