import React from 'react';
const LABEL_15501 = 'component_15501';
export function Component15501({ value = 15501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15501, 'data-value': derived.doubled }, children);
}
export default Component15501;
