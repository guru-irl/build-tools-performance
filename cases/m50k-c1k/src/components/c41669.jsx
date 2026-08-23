import React from 'react';
const LABEL_41669 = 'component_41669';
export function Component41669({ value = 41669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41669, 'data-value': derived.doubled }, children);
}
export default Component41669;
