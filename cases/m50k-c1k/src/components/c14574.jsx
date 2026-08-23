import React from 'react';
const LABEL_14574 = 'component_14574';
export function Component14574({ value = 14574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14574, 'data-value': derived.doubled }, children);
}
export default Component14574;
