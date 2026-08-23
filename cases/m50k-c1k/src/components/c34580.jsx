import React from 'react';
const LABEL_34580 = 'component_34580';
export function Component34580({ value = 34580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34580, 'data-value': derived.doubled }, children);
}
export default Component34580;
