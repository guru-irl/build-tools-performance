import React from 'react';
const LABEL_36925 = 'component_36925';
export function Component36925({ value = 36925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36925, 'data-value': derived.doubled }, children);
}
export default Component36925;
