import React from 'react';
const LABEL_24143 = 'component_24143';
export function Component24143({ value = 24143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24143, 'data-value': derived.doubled }, children);
}
export default Component24143;
