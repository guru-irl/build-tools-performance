import React from 'react';
const LABEL_29458 = 'component_29458';
export function Component29458({ value = 29458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29458, 'data-value': derived.doubled }, children);
}
export default Component29458;
