import React from 'react';
const LABEL_18812 = 'component_18812';
export function Component18812({ value = 18812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18812, 'data-value': derived.doubled }, children);
}
export default Component18812;
