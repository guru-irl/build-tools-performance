import React from 'react';
const LABEL_14327 = 'component_14327';
export function Component14327({ value = 14327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14327, 'data-value': derived.doubled }, children);
}
export default Component14327;
