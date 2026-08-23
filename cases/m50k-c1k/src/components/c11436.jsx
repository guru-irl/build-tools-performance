import React from 'react';
const LABEL_11436 = 'component_11436';
export function Component11436({ value = 11436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11436, 'data-value': derived.doubled }, children);
}
export default Component11436;
