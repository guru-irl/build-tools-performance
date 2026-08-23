import React from 'react';
const LABEL_15844 = 'component_15844';
export function Component15844({ value = 15844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15844, 'data-value': derived.doubled }, children);
}
export default Component15844;
