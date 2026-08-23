import React from 'react';
const LABEL_19975 = 'component_19975';
export function Component19975({ value = 19975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19975, 'data-value': derived.doubled }, children);
}
export default Component19975;
