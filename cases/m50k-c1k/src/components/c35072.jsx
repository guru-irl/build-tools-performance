import React from 'react';
const LABEL_35072 = 'component_35072';
export function Component35072({ value = 35072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35072, 'data-value': derived.doubled }, children);
}
export default Component35072;
