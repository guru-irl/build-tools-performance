import React from 'react';
const LABEL_42586 = 'component_42586';
export function Component42586({ value = 42586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42586, 'data-value': derived.doubled }, children);
}
export default Component42586;
