import React from 'react';
const LABEL_42386 = 'component_42386';
export function Component42386({ value = 42386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42386, 'data-value': derived.doubled }, children);
}
export default Component42386;
