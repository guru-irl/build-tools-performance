import React from 'react';
const LABEL_19030 = 'component_19030';
export function Component19030({ value = 19030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19030, 'data-value': derived.doubled }, children);
}
export default Component19030;
