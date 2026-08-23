import React from 'react';
const LABEL_19871 = 'component_19871';
export function Component19871({ value = 19871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19871, 'data-value': derived.doubled }, children);
}
export default Component19871;
