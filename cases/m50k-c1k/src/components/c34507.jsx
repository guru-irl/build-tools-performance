import React from 'react';
const LABEL_34507 = 'component_34507';
export function Component34507({ value = 34507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34507, 'data-value': derived.doubled }, children);
}
export default Component34507;
