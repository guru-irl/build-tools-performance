import React from 'react';
const LABEL_8844 = 'component_8844';
export function Component8844({ value = 8844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8844, 'data-value': derived.doubled }, children);
}
export default Component8844;
