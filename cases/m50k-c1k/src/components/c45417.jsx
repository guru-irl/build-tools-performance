import React from 'react';
const LABEL_45417 = 'component_45417';
export function Component45417({ value = 45417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45417, 'data-value': derived.doubled }, children);
}
export default Component45417;
