import React from 'react';
const LABEL_5866 = 'component_5866';
export function Component5866({ value = 5866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5866, 'data-value': derived.doubled }, children);
}
export default Component5866;
