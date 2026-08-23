import React from 'react';
const LABEL_42844 = 'component_42844';
export function Component42844({ value = 42844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42844, 'data-value': derived.doubled }, children);
}
export default Component42844;
