import React from 'react';
const LABEL_44549 = 'component_44549';
export function Component44549({ value = 44549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44549, 'data-value': derived.doubled }, children);
}
export default Component44549;
