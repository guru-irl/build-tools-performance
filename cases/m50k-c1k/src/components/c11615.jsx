import React from 'react';
const LABEL_11615 = 'component_11615';
export function Component11615({ value = 11615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11615, 'data-value': derived.doubled }, children);
}
export default Component11615;
