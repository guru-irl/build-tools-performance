import React from 'react';
const LABEL_22412 = 'component_22412';
export function Component22412({ value = 22412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22412, 'data-value': derived.doubled }, children);
}
export default Component22412;
