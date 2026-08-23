import React from 'react';
const LABEL_42579 = 'component_42579';
export function Component42579({ value = 42579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42579, 'data-value': derived.doubled }, children);
}
export default Component42579;
