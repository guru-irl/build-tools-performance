import React from 'react';
const LABEL_14224 = 'component_14224';
export function Component14224({ value = 14224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14224, 'data-value': derived.doubled }, children);
}
export default Component14224;
