import React from 'react';
const LABEL_29938 = 'component_29938';
export function Component29938({ value = 29938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29938, 'data-value': derived.doubled }, children);
}
export default Component29938;
