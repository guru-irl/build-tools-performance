import React from 'react';
const LABEL_16844 = 'component_16844';
export function Component16844({ value = 16844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16844, 'data-value': derived.doubled }, children);
}
export default Component16844;
