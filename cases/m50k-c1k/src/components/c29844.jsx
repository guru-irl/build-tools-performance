import React from 'react';
const LABEL_29844 = 'component_29844';
export function Component29844({ value = 29844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29844, 'data-value': derived.doubled }, children);
}
export default Component29844;
