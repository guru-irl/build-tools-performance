import React from 'react';
const LABEL_28140 = 'component_28140';
export function Component28140({ value = 28140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28140, 'data-value': derived.doubled }, children);
}
export default Component28140;
