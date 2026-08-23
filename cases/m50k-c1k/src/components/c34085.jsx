import React from 'react';
const LABEL_34085 = 'component_34085';
export function Component34085({ value = 34085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34085, 'data-value': derived.doubled }, children);
}
export default Component34085;
