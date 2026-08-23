import React from 'react';
const LABEL_35304 = 'component_35304';
export function Component35304({ value = 35304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35304, 'data-value': derived.doubled }, children);
}
export default Component35304;
