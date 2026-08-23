import React from 'react';
const LABEL_40507 = 'component_40507';
export function Component40507({ value = 40507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40507, 'data-value': derived.doubled }, children);
}
export default Component40507;
