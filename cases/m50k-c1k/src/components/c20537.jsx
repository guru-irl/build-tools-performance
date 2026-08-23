import React from 'react';
const LABEL_20537 = 'component_20537';
export function Component20537({ value = 20537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20537, 'data-value': derived.doubled }, children);
}
export default Component20537;
