import React from 'react';
const LABEL_43688 = 'component_43688';
export function Component43688({ value = 43688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43688, 'data-value': derived.doubled }, children);
}
export default Component43688;
