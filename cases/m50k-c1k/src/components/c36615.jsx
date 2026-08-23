import React from 'react';
const LABEL_36615 = 'component_36615';
export function Component36615({ value = 36615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36615, 'data-value': derived.doubled }, children);
}
export default Component36615;
