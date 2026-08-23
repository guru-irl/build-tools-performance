import React from 'react';
const LABEL_45078 = 'component_45078';
export function Component45078({ value = 45078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45078, 'data-value': derived.doubled }, children);
}
export default Component45078;
