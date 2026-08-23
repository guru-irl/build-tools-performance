import React from 'react';
const LABEL_35615 = 'component_35615';
export function Component35615({ value = 35615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35615, 'data-value': derived.doubled }, children);
}
export default Component35615;
