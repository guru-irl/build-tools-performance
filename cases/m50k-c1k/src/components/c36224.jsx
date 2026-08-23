import React from 'react';
const LABEL_36224 = 'component_36224';
export function Component36224({ value = 36224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36224, 'data-value': derived.doubled }, children);
}
export default Component36224;
