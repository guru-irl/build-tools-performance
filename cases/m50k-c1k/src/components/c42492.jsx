import React from 'react';
const LABEL_42492 = 'component_42492';
export function Component42492({ value = 42492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42492, 'data-value': derived.doubled }, children);
}
export default Component42492;
