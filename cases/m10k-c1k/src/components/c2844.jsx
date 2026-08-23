import React from 'react';
const LABEL_2844 = 'component_2844';
export function Component2844({ value = 2844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2844, 'data-value': derived.doubled }, children);
}
export default Component2844;
