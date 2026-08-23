import React from 'react';
const LABEL_5096 = 'component_5096';
export function Component5096({ value = 5096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5096, 'data-value': derived.doubled }, children);
}
export default Component5096;
