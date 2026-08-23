import React from 'react';
const LABEL_8549 = 'component_8549';
export function Component8549({ value = 8549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8549, 'data-value': derived.doubled }, children);
}
export default Component8549;
