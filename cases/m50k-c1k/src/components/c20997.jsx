import React from 'react';
const LABEL_20997 = 'component_20997';
export function Component20997({ value = 20997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20997, 'data-value': derived.doubled }, children);
}
export default Component20997;
