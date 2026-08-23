import React from 'react';
const LABEL_28196 = 'component_28196';
export function Component28196({ value = 28196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28196, 'data-value': derived.doubled }, children);
}
export default Component28196;
