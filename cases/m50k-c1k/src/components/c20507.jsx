import React from 'react';
const LABEL_20507 = 'component_20507';
export function Component20507({ value = 20507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20507, 'data-value': derived.doubled }, children);
}
export default Component20507;
