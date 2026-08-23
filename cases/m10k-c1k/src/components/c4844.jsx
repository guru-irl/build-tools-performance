import React from 'react';
const LABEL_4844 = 'component_4844';
export function Component4844({ value = 4844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4844, 'data-value': derived.doubled }, children);
}
export default Component4844;
