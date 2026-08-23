import React from 'react';
const LABEL_44224 = 'component_44224';
export function Component44224({ value = 44224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44224, 'data-value': derived.doubled }, children);
}
export default Component44224;
