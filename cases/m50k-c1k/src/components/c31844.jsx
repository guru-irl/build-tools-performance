import React from 'react';
const LABEL_31844 = 'component_31844';
export function Component31844({ value = 31844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31844, 'data-value': derived.doubled }, children);
}
export default Component31844;
