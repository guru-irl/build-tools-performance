import React from 'react';
const LABEL_1507 = 'component_1507';
export function Component1507({ value = 1507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1507, 'data-value': derived.doubled }, children);
}
export default Component1507;
