import React from 'react';
const LABEL_22436 = 'component_22436';
export function Component22436({ value = 22436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22436, 'data-value': derived.doubled }, children);
}
export default Component22436;
