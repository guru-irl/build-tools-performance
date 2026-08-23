import React from 'react';
const LABEL_45642 = 'component_45642';
export function Component45642({ value = 45642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45642, 'data-value': derived.doubled }, children);
}
export default Component45642;
