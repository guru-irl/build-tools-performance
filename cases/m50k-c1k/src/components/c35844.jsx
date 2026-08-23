import React from 'react';
const LABEL_35844 = 'component_35844';
export function Component35844({ value = 35844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35844, 'data-value': derived.doubled }, children);
}
export default Component35844;
