import React from 'react';
const LABEL_13224 = 'component_13224';
export function Component13224({ value = 13224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13224, 'data-value': derived.doubled }, children);
}
export default Component13224;
