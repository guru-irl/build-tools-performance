import React from 'react';
const LABEL_40224 = 'component_40224';
export function Component40224({ value = 40224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40224, 'data-value': derived.doubled }, children);
}
export default Component40224;
