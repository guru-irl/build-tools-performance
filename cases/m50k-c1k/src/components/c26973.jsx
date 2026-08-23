import React from 'react';
const LABEL_26973 = 'component_26973';
export function Component26973({ value = 26973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26973, 'data-value': derived.doubled }, children);
}
export default Component26973;
