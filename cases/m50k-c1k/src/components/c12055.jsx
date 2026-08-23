import React from 'react';
const LABEL_12055 = 'component_12055';
export function Component12055({ value = 12055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12055, 'data-value': derived.doubled }, children);
}
export default Component12055;
