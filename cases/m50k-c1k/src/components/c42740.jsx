import React from 'react';
const LABEL_42740 = 'component_42740';
export function Component42740({ value = 42740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42740, 'data-value': derived.doubled }, children);
}
export default Component42740;
