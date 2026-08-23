import React from 'react';
const LABEL_5224 = 'component_5224';
export function Component5224({ value = 5224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5224, 'data-value': derived.doubled }, children);
}
export default Component5224;
