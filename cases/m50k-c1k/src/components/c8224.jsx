import React from 'react';
const LABEL_8224 = 'component_8224';
export function Component8224({ value = 8224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8224, 'data-value': derived.doubled }, children);
}
export default Component8224;
