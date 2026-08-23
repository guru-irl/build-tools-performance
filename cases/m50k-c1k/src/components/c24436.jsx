import React from 'react';
const LABEL_24436 = 'component_24436';
export function Component24436({ value = 24436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24436, 'data-value': derived.doubled }, children);
}
export default Component24436;
