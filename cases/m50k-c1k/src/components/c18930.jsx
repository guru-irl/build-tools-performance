import React from 'react';
const LABEL_18930 = 'component_18930';
export function Component18930({ value = 18930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18930, 'data-value': derived.doubled }, children);
}
export default Component18930;
