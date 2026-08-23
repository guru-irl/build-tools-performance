import React from 'react';
const LABEL_19418 = 'component_19418';
export function Component19418({ value = 19418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19418, 'data-value': derived.doubled }, children);
}
export default Component19418;
