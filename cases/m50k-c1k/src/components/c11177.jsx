import React from 'react';
const LABEL_11177 = 'component_11177';
export function Component11177({ value = 11177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11177, 'data-value': derived.doubled }, children);
}
export default Component11177;
