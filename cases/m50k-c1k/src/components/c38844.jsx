import React from 'react';
const LABEL_38844 = 'component_38844';
export function Component38844({ value = 38844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38844, 'data-value': derived.doubled }, children);
}
export default Component38844;
