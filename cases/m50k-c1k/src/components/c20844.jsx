import React from 'react';
const LABEL_20844 = 'component_20844';
export function Component20844({ value = 20844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20844, 'data-value': derived.doubled }, children);
}
export default Component20844;
