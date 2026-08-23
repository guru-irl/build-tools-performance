import React from 'react';
const LABEL_45442 = 'component_45442';
export function Component45442({ value = 45442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45442, 'data-value': derived.doubled }, children);
}
export default Component45442;
