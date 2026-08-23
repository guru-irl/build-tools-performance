import React from 'react';
const LABEL_41549 = 'component_41549';
export function Component41549({ value = 41549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41549, 'data-value': derived.doubled }, children);
}
export default Component41549;
