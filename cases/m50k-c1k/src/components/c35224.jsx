import React from 'react';
const LABEL_35224 = 'component_35224';
export function Component35224({ value = 35224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35224, 'data-value': derived.doubled }, children);
}
export default Component35224;
