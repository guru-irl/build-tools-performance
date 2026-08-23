import React from 'react';
const LABEL_35764 = 'component_35764';
export function Component35764({ value = 35764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35764, 'data-value': derived.doubled }, children);
}
export default Component35764;
