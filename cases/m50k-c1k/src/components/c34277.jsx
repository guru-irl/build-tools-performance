import React from 'react';
const LABEL_34277 = 'component_34277';
export function Component34277({ value = 34277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34277, 'data-value': derived.doubled }, children);
}
export default Component34277;
