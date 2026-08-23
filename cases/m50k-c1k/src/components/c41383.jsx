import React from 'react';
const LABEL_41383 = 'component_41383';
export function Component41383({ value = 41383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41383, 'data-value': derived.doubled }, children);
}
export default Component41383;
