import React from 'react';
const LABEL_42486 = 'component_42486';
export function Component42486({ value = 42486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42486, 'data-value': derived.doubled }, children);
}
export default Component42486;
