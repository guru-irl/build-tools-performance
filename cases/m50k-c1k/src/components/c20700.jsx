import React from 'react';
const LABEL_20700 = 'component_20700';
export function Component20700({ value = 20700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20700, 'data-value': derived.doubled }, children);
}
export default Component20700;
