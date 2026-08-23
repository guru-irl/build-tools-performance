import React from 'react';
const LABEL_42306 = 'component_42306';
export function Component42306({ value = 42306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42306, 'data-value': derived.doubled }, children);
}
export default Component42306;
