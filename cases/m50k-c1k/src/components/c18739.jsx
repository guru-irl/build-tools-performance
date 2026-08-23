import React from 'react';
const LABEL_18739 = 'component_18739';
export function Component18739({ value = 18739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18739, 'data-value': derived.doubled }, children);
}
export default Component18739;
