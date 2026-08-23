import React from 'react';
const LABEL_42746 = 'component_42746';
export function Component42746({ value = 42746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42746, 'data-value': derived.doubled }, children);
}
export default Component42746;
