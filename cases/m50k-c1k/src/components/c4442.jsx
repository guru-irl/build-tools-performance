import React from 'react';
const LABEL_4442 = 'component_4442';
export function Component4442({ value = 4442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4442, 'data-value': derived.doubled }, children);
}
export default Component4442;
