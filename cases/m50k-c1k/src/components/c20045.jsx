import React from 'react';
const LABEL_20045 = 'component_20045';
export function Component20045({ value = 20045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20045, 'data-value': derived.doubled }, children);
}
export default Component20045;
