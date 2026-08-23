import React from 'react';
const LABEL_16422 = 'component_16422';
export function Component16422({ value = 16422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16422, 'data-value': derived.doubled }, children);
}
export default Component16422;
