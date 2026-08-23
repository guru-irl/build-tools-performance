import React from 'react';
const LABEL_38078 = 'component_38078';
export function Component38078({ value = 38078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38078, 'data-value': derived.doubled }, children);
}
export default Component38078;
