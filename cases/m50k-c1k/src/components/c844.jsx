import React from 'react';
const LABEL_844 = 'component_844';
export function Component844({ value = 844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_844, 'data-value': derived.doubled }, children);
}
export default Component844;
