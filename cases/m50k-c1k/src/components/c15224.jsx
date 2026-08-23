import React from 'react';
const LABEL_15224 = 'component_15224';
export function Component15224({ value = 15224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15224, 'data-value': derived.doubled }, children);
}
export default Component15224;
