import React from 'react';
const LABEL_45002 = 'component_45002';
export function Component45002({ value = 45002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45002, 'data-value': derived.doubled }, children);
}
export default Component45002;
