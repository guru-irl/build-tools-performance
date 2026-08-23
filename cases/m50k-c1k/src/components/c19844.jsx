import React from 'react';
const LABEL_19844 = 'component_19844';
export function Component19844({ value = 19844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19844, 'data-value': derived.doubled }, children);
}
export default Component19844;
