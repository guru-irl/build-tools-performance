import React from 'react';
const LABEL_27556 = 'component_27556';
export function Component27556({ value = 27556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27556, 'data-value': derived.doubled }, children);
}
export default Component27556;
