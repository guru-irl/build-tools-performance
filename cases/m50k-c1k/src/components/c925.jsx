import React from 'react';
const LABEL_925 = 'component_925';
export function Component925({ value = 925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_925, 'data-value': derived.doubled }, children);
}
export default Component925;
