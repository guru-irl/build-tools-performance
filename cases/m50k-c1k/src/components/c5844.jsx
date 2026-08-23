import React from 'react';
const LABEL_5844 = 'component_5844';
export function Component5844({ value = 5844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5844, 'data-value': derived.doubled }, children);
}
export default Component5844;
