import React from 'react';
const LABEL_42196 = 'component_42196';
export function Component42196({ value = 42196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42196, 'data-value': derived.doubled }, children);
}
export default Component42196;
