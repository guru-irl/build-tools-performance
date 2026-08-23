import React from 'react';
const LABEL_853 = 'component_853';
export function Component853({ value = 853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_853, 'data-value': derived.doubled }, children);
}
export default Component853;
