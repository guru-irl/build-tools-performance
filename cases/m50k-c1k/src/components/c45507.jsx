import React from 'react';
const LABEL_45507 = 'component_45507';
export function Component45507({ value = 45507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45507, 'data-value': derived.doubled }, children);
}
export default Component45507;
