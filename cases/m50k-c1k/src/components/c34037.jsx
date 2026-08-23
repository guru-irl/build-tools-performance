import React from 'react';
const LABEL_34037 = 'component_34037';
export function Component34037({ value = 34037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34037, 'data-value': derived.doubled }, children);
}
export default Component34037;
