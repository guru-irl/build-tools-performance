import React from 'react';
const LABEL_35938 = 'component_35938';
export function Component35938({ value = 35938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35938, 'data-value': derived.doubled }, children);
}
export default Component35938;
