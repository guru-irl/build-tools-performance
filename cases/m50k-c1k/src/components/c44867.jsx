import React from 'react';
const LABEL_44867 = 'component_44867';
export function Component44867({ value = 44867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44867, 'data-value': derived.doubled }, children);
}
export default Component44867;
