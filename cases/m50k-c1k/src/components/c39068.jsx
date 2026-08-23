import React from 'react';
const LABEL_39068 = 'component_39068';
export function Component39068({ value = 39068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39068, 'data-value': derived.doubled }, children);
}
export default Component39068;
