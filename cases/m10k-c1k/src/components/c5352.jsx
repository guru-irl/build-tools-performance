import React from 'react';
const LABEL_5352 = 'component_5352';
export function Component5352({ value = 5352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5352, 'data-value': derived.doubled }, children);
}
export default Component5352;
