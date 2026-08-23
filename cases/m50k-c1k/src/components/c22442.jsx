import React from 'react';
const LABEL_22442 = 'component_22442';
export function Component22442({ value = 22442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22442, 'data-value': derived.doubled }, children);
}
export default Component22442;
