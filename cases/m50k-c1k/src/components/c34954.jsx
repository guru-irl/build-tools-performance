import React from 'react';
const LABEL_34954 = 'component_34954';
export function Component34954({ value = 34954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34954, 'data-value': derived.doubled }, children);
}
export default Component34954;
