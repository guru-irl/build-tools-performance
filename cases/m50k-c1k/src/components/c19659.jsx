import React from 'react';
const LABEL_19659 = 'component_19659';
export function Component19659({ value = 19659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19659, 'data-value': derived.doubled }, children);
}
export default Component19659;
