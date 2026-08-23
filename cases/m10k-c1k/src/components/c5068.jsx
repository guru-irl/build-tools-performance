import React from 'react';
const LABEL_5068 = 'component_5068';
export function Component5068({ value = 5068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5068, 'data-value': derived.doubled }, children);
}
export default Component5068;
