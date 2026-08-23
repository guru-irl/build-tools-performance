import React from 'react';
const LABEL_34903 = 'component_34903';
export function Component34903({ value = 34903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34903, 'data-value': derived.doubled }, children);
}
export default Component34903;
